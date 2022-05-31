import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Apartment } from './apartment.entity';

@Entity({ name: 'service-apartment' })
export class ServiceApartment {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column()
  price: number;

  @Column()
  name: string;

  @Column({ default: false })
  isDelete: boolean;

  @ManyToOne(() => Apartment, (apartment) => apartment.services)
  apartment: Apartment;
}
