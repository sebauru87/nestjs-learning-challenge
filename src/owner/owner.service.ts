import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from 'src/entities';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}

  create(createOwnerDto: CreateOwnerDto) {
    return this.ownerRepository.save(createOwnerDto);
  }

  findAll() {
    return this.ownerRepository.find({ relations: ['dogs'] });
  }

  findOne(id: number) {
    return this.ownerRepository.findOne({ where: { id }, relations: ['dogs'] });
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return this.ownerRepository.update({ id }, updateOwnerDto);
  }

  remove(id: number) {
    return this.ownerRepository.delete({ id });
  }
}
