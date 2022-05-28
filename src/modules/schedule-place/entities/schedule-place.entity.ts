import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'schedule-place' })
export class SchedulePlace {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;
}
