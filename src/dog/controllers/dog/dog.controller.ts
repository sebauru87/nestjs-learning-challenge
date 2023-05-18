import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
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
  create(@Body() body) {
    return this.dogService.create(body);
  }

  @Patch(':dogId')
  update(@Param('dogId') dogId: number, @Body() body) {
    return this.dogService.update(dogId, body);
  }

  @Delete(':dogId')
  delete(@Param('dogId') dogId: number) {
    return this.dogService.delete(dogId);
  }
}
