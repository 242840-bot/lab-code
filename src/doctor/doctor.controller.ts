import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { Doctor } from './entities/doctor.entity';

@Controller('doctors')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  // POST - Create new doctor
  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto): Promise<Doctor> {
    return this.doctorService.create(createDoctorDto);
  }

  // GET - Get all doctors
  @Get()
  findAll(): Promise<Doctor[]> {
    return this.doctorService.findAll();
  }
}
