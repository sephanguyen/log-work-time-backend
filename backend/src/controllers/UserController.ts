import { Controller, Post, BodyParams, Get } from '@tsed/common';
import { Docs, Summary, Description, Returns } from '@tsed/swagger';
import { UsersService } from '../services/UserService';
import { User } from '../entity/User';

@Controller('/users')
@Docs('api-v1')
export class UsersCtrl {
  constructor(private usersService: UsersService) {}

  @Post('/')
  @Summary('Create user')
  @Description('Create user')
  @Returns(404, { description: 'Not found' })
  create(@BodyParams() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @Get('/')
  getList(): Promise<User[]> {
    return this.usersService.find();
  }
}
