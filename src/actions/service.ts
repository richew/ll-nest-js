import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Action } from '../models/action';

@Injectable()
export class ActionsService {
  constructor(
    @InjectRepository(Action)
    private userRepository: Repository<Action>,
  ) {}

  async save(action: Action): Promise<Action> {
    await this.userRepository.save(action);
    return action;
  }

  get(id): Promise<Action> {
    return this.userRepository.findOne({ where: { id } });
  }

  delete(id) {
    return this.userRepository.delete(id);
  }

  getAll(order: 'ASC' | 'DESC' = 'ASC'): Promise<Action[]> {
    return this.userRepository.find({ order: { id: order } });
  }
}
