import { Module } from '@nestjs/common';
import { PlaceService } from './apartment.service';
import { PlaceController } from './apartment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerApartment } from '../owner-apartment/entities/owner-apartments.entity';
import { Apartment } from './entities/apartment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Apartment, OwnerApartment])],
  controllers: [PlaceController],
  providers: [PlaceService],
})
export class PlaceModule {}
