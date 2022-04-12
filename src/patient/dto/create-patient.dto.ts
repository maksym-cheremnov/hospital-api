import { IsNotEmpty, IsString } from 'class-validator';
import { PetType } from '../entities/patient.entity';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  public pet_name: string;

  @IsNotEmpty()
  public pet_type: PetType;

  @IsString()
  @IsNotEmpty()
  public owner_name: string;

  @IsString()
  @IsNotEmpty()
  public owner_address: string;

  @IsString()
  @IsNotEmpty()
  public owner_phone: string;
}
