import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'auth/services/auth.service';
import { JwtStrategy } from 'auth/passport/jwt.strategy';
import { UserModule } from '../user/user.module';
import { UserService } from 'user/services/user.service';
import { AuthController } from 'auth/controllers/auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600
      }
    }),
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UserService]
})
export class AuthModule {}
