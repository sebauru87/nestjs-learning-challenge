import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Owner } from 'src/entities';

export class DogDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  breed: string;

  @ApiProperty()
  @IsNumber()
  age: number;

  @ApiProperty()
  color: string;

  @ApiProperty()
  owner: Owner;
}
