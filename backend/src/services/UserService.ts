import { Service, AfterRoutesInit } from '@tsed/common';
import { Repository } from 'typeorm';

import { User } from '../entity/User';
import { Dbcontext } from '../repositories/DbContext';

@Service()
export class UsersService implements AfterRoutesInit {
  private userRepository: Repository<User>;
  constructor(private dbcontext: Dbcontext) {}

  $afterRoutesInit() {
    this.userRepository = this.dbcontext.getReporitory(User);
  }

  async create(user: User): Promise<User> {
    await this.userRepository.save(user);
    console.log('Saved a new user with id: ' + user.id);

    return user;
  }

  async find(): Promise<User[]> {
    const users = await this.userRepository.find();
    console.log('Loaded users: ', users);

    return users;
  }
}
