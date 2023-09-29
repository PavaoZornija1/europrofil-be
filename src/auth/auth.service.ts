import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { compare, genSalt, hash } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { CustomersService } from 'src/customers/customers.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly customerService: CustomersService,
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

  private authenticate(userId: string): Promise<string> {
    const payload = { userId: userId };
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

    const token = await this.authenticate(user.id);
    return {
      token: token,
      ...user,
    };
    // return token;
  }

  async customerLogin(loginDto: LoginDto) {
    const { username, password } = loginDto;
    const user = await this.customerService.findByUsername(username);

    if (!user) {
      throw new BadRequestException(username, 'Wrong credentials');
    }

    const isMatched = await this.comparePassword(password, user.password);
    if (!isMatched) {
      throw new BadRequestException(password, 'Wrong credentials');
    }

    const token = await this.authenticate(user.id);
    return {
      token: token,
      ...user,
    };
    // return token;
  }
}
