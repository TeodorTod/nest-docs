import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    return this.cats.push(cat);
  }

  findOne(id: number) {
    return this.cats.find(cat => cat.id === id);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
