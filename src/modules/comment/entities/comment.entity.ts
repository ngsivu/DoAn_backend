import { Apartment } from '../../apartment/entities/apartment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column()
  start: number;

  @Column()
  comment: string;

  @CreateDateColumn()
  createAt: Date;

  @Column({ default: false })
  isDisable: boolean;

  @ManyToOne(() => Apartment, (apartment) => apartment.comment)
  apartment: Apartment;

  // many to one user
  // many to one place
}
