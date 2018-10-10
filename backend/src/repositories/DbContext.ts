import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';

@Service()
export class Dbcontext implements AfterRoutesInit {
  private connection: Connection;
  constructor(private typeORMService: TypeORMService) {}

  $afterRoutesInit() {
    this.connection = this.typeORMService.get('default');
  }

  public getReporitory(target: any) {
    return this.connection.getRepository(target);
  }
}