import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  specialty: string;

  @IsString()
  @IsNotEmpty()
  phone: string;
}
