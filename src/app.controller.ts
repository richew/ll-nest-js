import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Message} from './types/message';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCheck(): Message {
    return this.appService.healthCheck();
  }
}
