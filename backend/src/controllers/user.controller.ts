import { Get, Controller, Body, Post } from '@nestjs/common';
import { UserService } from 'services/user.service';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { User } from 'entities/user.entity';

@ApiUseTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Ok',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async findAll() {
    return await this.userService.findAllUser();
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Ok',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() user: User) {
    return await this.userService.create(user);
  }
}
