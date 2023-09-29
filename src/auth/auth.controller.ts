import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }

  @Post('customer-login')
  public async customerLogin(@Body() loginDto: LoginDto) {
    return await this.authService.customerLogin(loginDto);
  }
}
