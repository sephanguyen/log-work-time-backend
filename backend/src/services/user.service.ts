import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'repositories/User.repository';
import { User } from 'entities/user.entity';
import { Transactional } from 'typeorm-transactional-cls-hooked';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  public async findAllUser() {
    return await this.userRepository.find();
  }

  @Transactional()
  public async create(user: User) {
    return await this.userRepository.save(user);
  }
}
