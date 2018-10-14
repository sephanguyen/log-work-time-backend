import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'controllers/app.controller';
import { AppService } from 'services/app.service';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
