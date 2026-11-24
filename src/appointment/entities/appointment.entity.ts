import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Doctor } from '../../doctor/entities/doctor.entity';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientName: string;

  @Column()
  appointmentDate: Date;

  @Column()
  timeSlot: string;

  @Column({ default: 'Pending' })
  status: string;

  // Many appointments belong to one doctor
  @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
  doctor: Doctor;

  @Column()
  doctorId: number;
}
