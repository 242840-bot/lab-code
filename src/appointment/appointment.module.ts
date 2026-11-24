import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { Appointment } from './entities/appointment.entity';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { DoctorModule } from '../doctor/doctor.module';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment]), DoctorModule],
  controllers: [AppointmentController],
  providers: [AppointmentService],
})
export class AppointmentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('appointments');
  }
}
