import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  find(body): any {
    // return 'find is working well !';
    return `find function with params breed: ${body.breed} & age: ${body.age}`;
  }

  findOne(dogId: number) {
    return `findOne is working, and the dogId parameter is ${dogId}`;
  }

  create(body: any): any {
    return `create function with properties, breed: ${body.breed}, age: ${body.age} & color: ${body.color}`;
  }

  update(dogId: number, body: any): any {
    return `update function dog with id: ${dogId} & property, age: ${body.age}`;
  }

  delete(dogId: number): any {
    return `delete function dog with id: ${dogId}`;
  }
}
