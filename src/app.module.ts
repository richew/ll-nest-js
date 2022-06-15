import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActionsController } from './actions/controller';
import { ActionsService } from './actions/service';
import { ActionsModule } from './actions/module';
import { Action } from './models/action';
import { CatGenController } from './cat-gen/cat-gen.controller';
import { CatGenService } from './cat-gen/cat-gen.service';
import { CatGenModule } from './cat-gen/module';
import {Cat} from "./models/cat";

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
      entities: [Action, Cat],
      synchronize: true,
    }),
    ActionsModule,
    CatGenModule,
  ],
  controllers: [AppController, ActionsController, CatGenController],
  providers: [AppService, ActionsService, CatGenService],
})
export class AppModule {}
