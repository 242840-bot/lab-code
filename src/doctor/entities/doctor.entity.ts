import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Appointment } from '../../appointment/entities/appointment.entity';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  specialty: string;

  @Column()
  phone: string;

  // One doctor has many appointments
  @OneToMany(() => Appointment, (appointment) => appointment.doctor, {
    cascade: true,
  })
  appointments: Appointment[];
}
