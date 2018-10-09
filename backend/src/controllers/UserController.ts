import { Controller, Post, BodyParams, Get } from '@tsed/common';
import { UsersService } from '../services/UserService';
import { User } from '../entity/User';

@Controller('/users')
export class UsersCtrl {
  constructor(private usersService: UsersService) {}

  @Post('/')
  create(@BodyParams() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Get('/')
  getList(): Promise<User[]> {
    return this.usersService.find();
  }
}
