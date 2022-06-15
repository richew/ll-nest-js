import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from '../models/cat';

@Injectable()
export class CatGenService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ) {}

  async getAll(): Promise<Cat[]> {
    return this.catRepository.find({ order: { id: 'ASC' } });
  }

  async save(cat: Cat): Promise<Cat> {
    return this.catRepository.save(cat);
  }

  async findById(id: number): Promise<Cat> {
    return this.catRepository.findOne({ where: { id } });
  }

  async catLostLife(cat: Cat): Promise<Cat> {
    // eslint-disable-next-line no-param-reassign
    cat.lives -= 1;
    return this.catRepository.save(cat);
  }
}
