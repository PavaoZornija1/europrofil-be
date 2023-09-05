import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
// import { UsersService } from '@europrofil-admin-be/users';
import { JwtService } from '@nestjs/jwt';
import { compare, genSalt, hash } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  private async comparePassword(
    password: string,
    encrypted: string,
  ): Promise<boolean> {
    try {
      return await compare(password, encrypted);
    } catch (e) {
      throw new InternalServerErrorException(`Error: ${e}`);
    }
  }

  private static async hashPassword(data: string): Promise<string> {
    try {
      const salt = await genSalt(10);
      return await hash(data, salt);
    } catch (e) {
      throw new InternalServerErrorException(`Error: ${e}`);
    }
  }

  private authenticate(username: string): Promise<string> {
    const payload = { username };
    return this.jwtService.signAsync(payload);
  }

  // async validateUser(payload: JwtPayload): Promise<AuthUser> {
  //   const user = await this.userService.findByEmail(payload.email);
  //   return this._mapper.mapAsync(user, AuthUser);
  // }

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;
    const user = await this.userService.findByUsername(username);

    if (!user) {
      throw new BadRequestException(username, 'Wrong credentials');
    }

    const isMatched = await this.comparePassword(password, user.password);
    if (!isMatched) {
      throw new BadRequestException(password, 'Wrong credentials');
    }

    const token = await this.authenticate(username);

    // const result = new LoginResultVm();
    // result.token = token;
    // result.user = await this._mapper.mapAsync(user, UserInformationVm);
    return token;
    // const { email, password } = loginDto;
    // const user = await this.userService.findByEmail(email);

    // if (!user) {
    //   throw new BadRequestException(email, 'Wrong credentials');
    // }

    // const isMatched = await this.comparePassword(password, user.password);
    // if (!isMatched) {
    //   throw new BadRequestException(password, 'Wrong credentials');
    // }

    // const token = await this.authenticate(username);

    // const result = new LoginResultVm();
    // result.token = token;
    // result.user = await this._mapper.mapAsync(user, UserInformationVm);
    // return token;

    // return 'eyJ1c2VySWQiOiJhYmNkMTIzIiwiZXhwaXJ5IjoxNjQ2NjM1NjExMzAxfQ';
  }
}
