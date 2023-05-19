import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Dog } from '../../../entities';
import { CreateDogDto } from '../../dto/create-dog.dto';
import { UpdateDogDto } from '../../dto/update-dog.dto';
import { OwnerService } from 'src/owner/owner.service';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dog) private readonly dogRepository: Repository<Dog>,
    @Inject(forwardRef(() => OwnerService))
    private readonly ownerService: OwnerService,
  ) {}

  find(breed: string, age: number) {
    return this.dogRepository.find({
      where: [{ breed: breed }, { age: age }],
      relations: ['owner'],
    });
  }

  findOne(dogId: number) {
    return this.dogRepository.findOne({ where: { id: dogId } });
  }

  findAll() {
    return this.dogRepository.find({ relations: ['owner'] });
  }

  async create(createDogDto: CreateDogDto) {
    const newDog = await this.dogRepository.create(createDogDto);
    const owner = await this.ownerService.findOne(createDogDto.ownerId);
    newDog.owner = owner;
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
