import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'repositories/User.repository';
import { User } from 'entities/user.entity';
import { Transactional } from 'typeorm-transactional-cls-hooked';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository
  ) {}

  public async findAllUser() {
    return await this.userRepository.find();
  }

  public async findOneByToken(token) {
    return await this.userRepository.findOne({ where: { token } });
  }

  public async findOneByEmail(email) {
    return await this.userRepository.findOne({ where: { email } });
  }

  public async getUserWithUserName(userName) {
    return await this.userRepository.findOne({
      where: { userName }
    });
  }

  @Transactional()
  public async create(user: User) {
    return await this.userRepository.save(user);
  }
}
