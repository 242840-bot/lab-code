import { IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  @IsNotEmpty()
  patientName: string;

  @IsDateString()
  @IsNotEmpty()
  appointmentDate: string;

  @IsString()
  @IsNotEmpty()
  timeSlot: string;

  @IsNumber()
  @IsNotEmpty()
  doctorId: number;
}
