import { Controller, Body, Post } from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'services/auth.service';
import { UserLogin } from 'interfaces/user-login.interface';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Ok'
  })
  async login(@Body() user: UserLogin) {
    return await this.authService.signIn(user);
  }
}
