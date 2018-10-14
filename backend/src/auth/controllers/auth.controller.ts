import { Controller, Body, Post } from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'auth/services/auth.service';
import { UserLogin } from 'auth/interfaces/user-login.interface';
import { User } from 'user/entities/user.entity';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiResponse({
    status: 200,
    description: 'Ok'
  })
  async login(@Body() user: UserLogin) {
    return await this.authService.signIn(user);
  }

  @Post('register')
  @ApiResponse({
    status: 201,
    description: 'Ok'
  })
  async register(@Body() user: User) {
    return await this.authService.register(user);
  }
}
