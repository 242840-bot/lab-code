import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorModule } from './doctor/doctor.module';
import { AppointmentModule } from './appointment/appointment.module';
import { Doctor } from './doctor/entities/doctor.entity';
import { Appointment } from './appointment/entities/appointment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'hospital_db',
      entities: [Doctor, Appointment],
      synchronize: true,
      logging: false,
    }),
    DoctorModule,
    AppointmentModule,
  ],
})
export class AppModule {}
