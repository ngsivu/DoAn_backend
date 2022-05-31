import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OwnerApartment } from '../../owner-apartment/entities/owner-apartments.entity';
import { ServiceApartment } from './service-apartment.entity';
import { TypeApartment } from './type-apartment.entity';

@Entity({ name: 'apartment' })
export class Apartment {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column({ length: 30, name: 'address' })
  address: string;

  @Column({ name: 'point', default: 100 })
  point: number;

  @Column({ type: 'simple-array', name: 'imageBanner' })
  imageBanner: string;

  @Column({ type: 'simple-array', name: 'imageDetails' })
  imageDetails: string;

  @Column({ name: 'timeOpen' })
  timeOpen: string;

  @Column({ name: 'priceMin' })
  priceMin: number;

  @Column({ name: 'isEnable', default: true })
  isEnable: boolean;

  @Column({ name: 'timeClose' })
  timeClose: string;

  @Column({ nullable: true })
  limitUser: number;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(
    () => OwnerApartment,
    (OwnerApartment) => OwnerApartment.apartments,
  )
  owner: OwnerApartment;

  @ManyToOne(() => TypeApartment, (typeApartment) => typeApartment.apartment)
  typeApartment: TypeApartment;
  //one to many bang time vip

  //one to many dich vu
  @OneToMany(() => ServiceApartment, (service) => service.apartment, {
    cascade: true,
  })
  services: ServiceApartment[];

  //one to many comment place

  // one to many voucher

  //one to many order
}
