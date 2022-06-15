import { Injectable } from '@nestjs/common';
import { Message } from './types/message';

@Injectable()
export class AppService {
  healthCheck(): Message {
    return { message: 'ok' };
  }
}
