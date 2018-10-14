import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'auth/interfaces/jwt-payload.interface';
import { UserLogin } from 'auth/interfaces/user-login.interface';
import { User } from 'user/entities/user.entity';
import { hash, compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async signIn({ userName, password }: UserLogin): Promise<string> {
    const user = await this.userService.getUserWithUserName(userName);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    if (!compare(password, user.password)) {
      throw new HttpException('Password not match', HttpStatus.BAD_REQUEST);
    }
    const userPayload: JwtPayload = { email: user.email };
    return this.jwtService.sign(userPayload);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.userService.findOneByEmail(payload.email);
  }

  async register(user: User) {
    const { password } = user;
    const hashPassword = await hash(password, 10);
    await this.userService.create({ ...user, password: hashPassword });
    return true;
  }
}
