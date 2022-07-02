import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Apartment } from './apartment.entity';

@Entity({ name: 'type-place' })
export class TypeApartment {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isDeleted: boolean;

  @OneToMany(() => Apartment, (place) => place.typeApartment)
  apartment: Apartment[];
}
