import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Appointment } from './entities/appointment.entity';
import { ApiKeyGuard } from './guards/api-key.guard';

@Controller('appointments')
@UseGuards(ApiKeyGuard)
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  // POST - Create appointment (C in CRUD)
  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    return this.appointmentService.create(createAppointmentDto);
  }

  // GET - Get all appointments (R in CRUD)
  @Get()
  findAll(): Promise<Appointment[]> {
    return this.appointmentService.findAll();
  }

  // GET - Get appointment by ID (R in CRUD)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Appointment> {
    return this.appointmentService.findOne(Number(id));
  }

  // PUT - Update appointment (U in CRUD)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<Appointment>,
  ): Promise<Appointment> {
    return this.appointmentService.update(Number(id), updateData);
  }

  // DELETE - Remove appointment (D in CRUD)
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.appointmentService.remove(Number(id));
  }
}
