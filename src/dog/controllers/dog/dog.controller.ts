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
import {
  ApiTags,
  ApiOkResponse,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';

import { DogDto } from 'src/dog/dto/dog.dto';
import { CreateDogDto } from 'src/dog/dto/create-dog.dto';
import { UpdateDogDto } from 'src/dog/dto/update-dog.dto';
import { DogService } from '../../../dog/services/dog/dog.service';

@ApiTags('Dog')
@Controller('dog')
export class DogController {
  constructor(private dogService: DogService) {}

  @Get()
  @ApiQuery({
    name: 'breed',
    type: String,
    description: 'The breed of the dog',
    required: false,
  })
  @ApiQuery({
    name: 'age',
    type: Number,
    description: 'The age of the dog',
    required: false,
  })
  @ApiOkResponse({
    description: 'The dogs records',
    type: DogDto,
    isArray: true,
  })
  find(@Query('breed') breed: string, @Query('age') age: number) {
    if (age || breed) {
      return this.dogService.find(breed, age);
    }
    return this.dogService.findAll();
  }

  @Get(':dogId')
  @ApiParam({
    name: 'dogId',
    description: 'The id of the dog',
    required: true,
  })
  @ApiOkResponse({
    description: 'One dog record',
    type: DogDto,
    isArray: false,
  })
  findOne(@Param('dogId') dogId: number) {
    return this.dogService.findOne(dogId);
  }

  @Post()
  @ApiBody({
    type: CreateDogDto,
    description: 'The create dog dto',
    required: true,
  })
  @ApiOkResponse({
    description: 'The created dog',
    type: DogDto,
    isArray: false,
  })
  @UsePipes(ValidationPipe)
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @Patch(':dogId')
  @ApiBody({
    type: UpdateDogDto,
    description: 'The update dog dto',
    required: true,
  })
  @ApiParam({
    name: 'dogId',
    description: 'The id of the dog',
    required: true,
  })
  @ApiOkResponse({
    description: 'The updated dog',
    type: DogDto,
    isArray: false,
  })
  @UsePipes(ValidationPipe)
  update(@Body() updateDogDto: UpdateDogDto, @Param('dogId') dogId: number) {
    return this.dogService.update(updateDogDto, dogId);
  }

  @Delete(':dogId')
  @ApiParam({
    name: 'dogId',
    description: 'The id of the dog',
    required: true,
  })
  @ApiOkResponse({
    description: 'The deleted result',
    type: DeleteResult,
    isArray: false,
  })
  delete(@Param('dogId') dogId: number) {
    return this.dogService.delete(dogId);
  }
}
