import {
  Controller,
  Get,
  Param,
  Query,
  Body,
  Post,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateDogDto } from 'src/dog/dto/create-dog.dto';
import { UpdateDogDto } from 'src/dog/dto/update-dog.dto';
import { DogService } from '../../../dog/services/dog/dog.service';

@Controller('dog')
export class DogController {
  constructor(private dogService: DogService) {}

  @Get()
  find(@Query('breed') breed: string, @Query('age') age: number) {
    if (age || breed) {
      return this.dogService.find(breed, age);
    }
    return this.dogService.findAll();
  }

  @Get(':dogId')
  findOne(@Param('dogId') dogId: number) {
    return this.dogService.findOne(dogId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @Patch(':dogId')
  @UsePipes(ValidationPipe)
  update(@Body() updateDogDto: UpdateDogDto, @Param('dogId') dogId: number) {
    return this.dogService.update(updateDogDto, dogId);
  }

  @Delete(':dogId')
  delete(@Param('dogId') dogId: number) {
    return this.dogService.delete(dogId);
  }
}
