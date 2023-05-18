import { Injectable } from '@nestjs/common';

import { DOGS } from '../../../../db/dogs';

@Injectable()
export class DogService {
  find(breed: string, age: number) {
    let filteredDogs = [];

    if (breed && age) {
      return DOGS.filter((dog) => dog.breed == breed && dog.age >= age);
    }

    breed
      ? (filteredDogs = DOGS.filter((dog) => dog.breed == breed))
      : (filteredDogs = DOGS.filter((dog) => dog.age >= age));

    return filteredDogs;
  }

  findOne(dogId: number) {
    return DOGS.find((dog) => dog.id == dogId);
  }

  findAll() {
    return DOGS;
  }

  create(body: any): any {
    const newDog = {
      id: DOGS.length + 1,
      ...body,
    };
    DOGS.push(newDog);
    return newDog;
  }

  update(dogId: number, body: any): any {
    const foundIndex = DOGS.findIndex((d) => d.id == dogId);
    const updatedDog = {
      ...DOGS[foundIndex],
      ...body,
    };
    DOGS[foundIndex] = updatedDog;
    return updatedDog;
  }

  delete(dogId: number): any {
    const indexOfObject = DOGS.findIndex((d) => {
      return d.id == dogId;
    });
    DOGS.splice(indexOfObject, 1);
    return `Dog deleted successfully`;
  }
}
