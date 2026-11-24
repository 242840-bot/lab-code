import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
  ) {}

  // Create new doctor
  async create(createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    const doctor = this.doctorRepository.create(createDoctorDto);
    return this.doctorRepository.save(doctor);
  }

  // Get all doctors
  async findAll(): Promise<Doctor[]> {
    return this.doctorRepository.find({
      relations: ['appointments'],
    });
  }

  // Get doctor by ID
  async findOne(id: number): Promise<Doctor> {
    return this.doctorRepository.findOne({
      where: { id },
      relations: ['appointments'],
    });
  }
}
