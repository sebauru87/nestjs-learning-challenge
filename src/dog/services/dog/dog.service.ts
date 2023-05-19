import { Injectable } from '@nestjs/common';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Dog } from '../../../entities';
import { CreateDogDto } from '../../dto/create-dog.dto';
import { UpdateDogDto } from '../../dto/update-dog.dto';
import { DOGS } from '../../../../db/dogs';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dog) private readonly dogRepository: Repository<Dog>,
  ) {}

  find(breed: string, age: number) {
    return this.dogRepository.find({ where: [{ breed: breed }, { age: age }] });
  }

  findOne(dogId: number) {
    return this.dogRepository.findOne({ where: { id: dogId } });
  }

  findAll() {
    return DOGS;
  }

  async create(createDogDto: CreateDogDto) {
    const newDog = await this.dogRepository.create(createDogDto);
    return this.dogRepository.save(newDog);
  }

  update(updateDogDto: UpdateDogDto, idDog: number) {
    return this.dogRepository.save({
      id: idDog,
      ...updateDogDto,
    });
  }

  delete(idDog: number) {
    return this.dogRepository.delete({ id: idDog });
  }
}
