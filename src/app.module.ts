import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionsController } from './actions/controller';
import { ActionsService } from './actions/service';
import { ActionsModule } from './actions/module';
import { Action } from './models/action';

const host = process.env.DB_HOST ?? 'localhost';
const port = process.env.DB_PORT ?? 5432;
const username = process.env.DB_USER ?? 'postgres';
const password = process.env.DB_PASS ?? 'postgres';
const database = process.env.DB_NAME ?? 'test';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: Number(port),
      host,
      username,
      password,
      database,
      entities: [Action],
      synchronize: true,
    }),
    ActionsModule,
  ],
  controllers: [AppController, ActionsController],
  providers: [AppService, ActionsService],
})
export class AppModule {}
