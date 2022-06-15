import {
  Controller, Get, Param, Post, Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CatGenService } from './cat-gen.service';
import { Cat } from '../models/cat';

@Controller('cat-gen')
export class CatGenController {
  constructor(private readonly catGenService: CatGenService) {}

  @Get() // /actions
  getAll(): Promise<Cat[]> {
    return this.catGenService.getAll();
  }

  @Post()
  createCat(
  @Req() request: Request,
  ) {
    const { body } = request;
    console.log('body => ', body);
    return this.catGenService.save(body);
  }

  @Get('/:id')
  getCat(@Param('id') id: number) {
    return this.catGenService.findById(id);
  }

  @Get('/:id/feed')
  async feedCat(@Param('id') id: number) {
    const cat = await this.catGenService.findById(id);
    return `${cat.name} has been fed`;
  }

  @Get('/:id/kill')
  async killCat(@Param('id') id: number) {
	  const cat = await this.catGenService.findById(id);
    await this.catGenService.catLostLife(cat);
	  const alive = !cat.isAlive
	    ? 'is dead'
	    : `has ${cat.lives} left`;
	  return `${cat.name} has died and ${alive}`;
  }
}
