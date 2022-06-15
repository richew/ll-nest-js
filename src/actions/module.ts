import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Action } from '../models/action';

@Module({
  imports: [TypeOrmModule.forFeature([Action])],
  exports: [TypeOrmModule],
})

export class ActionsModule {}
