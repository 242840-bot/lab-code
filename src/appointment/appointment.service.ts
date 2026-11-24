import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { DoctorService } from '../doctor/doctor.service';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
    private doctorService: DoctorService,
  ) {}

  // CREATE - Add new appointment
  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    // Verify doctor exists
    const doctor = await this.doctorService.findOne(createAppointmentDto.doctorId);
    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }

    const appointment = this.appointmentRepository.create(createAppointmentDto);
    return this.appointmentRepository.save(appointment);
  }

  // READ - Get all appointments
  async findAll(): Promise<Appointment[]> {
    return this.appointmentRepository.find({
      relations: ['doctor'],
    });
  }

  // READ - Get appointment by ID
  async findOne(id: number): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findOne({
      where: { id },
      relations: ['doctor'],
    });

    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    return appointment;
  }

  // UPDATE - Update appointment
  async update(id: number, updateData: Partial<Appointment>): Promise<Appointment> {
    await this.appointmentRepository.update(id, updateData);
    return this.findOne(id);
  }

  // DELETE - Remove appointment
  async remove(id: number): Promise<void> {
    const result = await this.appointmentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Appointment not found');
    }
  }
}
