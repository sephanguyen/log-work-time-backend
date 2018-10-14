import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'interfaces/jwt-payload.interface';
import { UserLogin } from 'interfaces/user-login.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signIn({ userName, password }: UserLogin): Promise<string> {
    const user = await this.userService.checkUserNameAndPassword(
      userName,
      password
    );
    if (!user) {
      throw new HttpException(
        'User name Or password not match',
        HttpStatus.BAD_REQUEST
      );
    }
    const userPayload: JwtPayload = { email: user.email };
    return this.jwtService.sign(userPayload);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.userService.findOneByEmail(payload.email);
  }
}
