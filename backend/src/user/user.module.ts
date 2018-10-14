import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'user/entities/user.entity';
import { UserRepository } from 'user/repositories/user.repository';
import { UserController } from 'user/controllers/user.controller';
import { UserService } from 'user/services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
