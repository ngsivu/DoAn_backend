import { TYPE } from 'src/common/constant';
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

  @Column({ length: 250, name: 'address-place' })
  address: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ name: 'point', default: 0 })
  point: number;

  @Column({ type: 'simple-array', name: 'imageDetails' })
  imageDetails: string;

  @Column({ name: 'province' })
  province: string;

  @Column({ name: 'district' })
  district: string;

  @Column({ name: 'ward' })
  ward: string;

  @Column({ name: 'price' })
  price: string;

  @Column({ name: 'listServices' })
  listServices: string;

  @Column({ name: 'deposit', nullable: true })
  deposit: string;

  @Column({ name: 'area' })
  area: string;

  @Column({ name: 'totalFloor', default: 1 })
  totalFloor: string;

  @Column({ name: 'totalBedroom', default: 1 })
  totalBedroom: string;

  @Column({ name: 'totalRestroom', default: 1 })
  totalRestroom: string;

  @Column({ name: 'isEnable', default: true })
  isEnable: boolean;

  @Column({ name: 'limit-users', nullable: true })
  limitUsers: number;

  @Column({ name: 'vip', default: false })
  vip: boolean;

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
