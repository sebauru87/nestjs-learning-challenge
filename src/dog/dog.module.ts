import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Dog } from '../entities';
import { DogController } from './controllers/dog/dog.controller';
import { DogService } from './services/dog/dog.service';
import { OwnerModule } from 'src/owner/owner.module';

@Module({
  imports: [TypeOrmModule.forFeature([Dog]), forwardRef(() => OwnerModule)],
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}
