import { EntityRepository } from 'typeorm';
import { User } from 'user/entities/user.entity';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {}
