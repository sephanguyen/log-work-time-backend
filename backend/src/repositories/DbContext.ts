import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection, Repository } from 'typeorm';

@Service()
export class Dbcontext implements AfterRoutesInit {
  private connection: Connection;
  constructor(private typeORMService: TypeORMService) {}

  $afterRoutesInit() {
    this.connection = this.typeORMService.get('default');
  }

  public getReporitory<T>(target: any) {
    return this.connection.manager.getRepository<T>(target);
  }
}
