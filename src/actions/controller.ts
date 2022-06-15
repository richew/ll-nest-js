import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
  Req,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ActionsService } from './service';
import { Action } from '../models/action';

@Controller('actions')
export class ActionsController {
  constructor(private readonly actionsService: ActionsService) {}

  @Get()
  getAll(): Promise<Action[]> {
    return this.actionsService.getAll();
  }

  @Get('/:id')
  async get(
    @Param('id') id: number,
      @Res() response: Response,
  ): Promise<Response<any>> {
    const action = await this.actionsService.get(id);

    if (!action) {
      return response
        .sendStatus(HttpStatus.NOT_FOUND)
        .send({ error: 'not found' });
    }

    return response.send(action);
  }

  @Post()
  async create(
    @Req() request: Request,
      @Res() response: Response,
  ): Promise<Response<any>> {
    const { body } = request;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { type, message } = body;

    if (!type || !message) {
      return response
        .sendStatus(HttpStatus.BAD_REQUEST)
        .send({ error: 'improper action' });
    }

    const action = new Action();
    action.type = type;
    action.message = message;
    action.received = new Date();

    return response.send(await this.actionsService.save(action));
  }

  @Delete('/:id')
  async del(
    @Param('id') id: number,
      @Res() response: Response,
  ): Promise<Response<any>> {
    const action = await this.actionsService.get(id);

    if (!action) {
      return response
        .sendStatus(HttpStatus.NOT_FOUND)
        .send({ error: 'not found' });
    }

    return response.send(await this.actionsService.delete(id));
  }
}
