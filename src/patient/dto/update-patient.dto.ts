import { IsNotEmpty, IsString } from 'class-validator';

export class updatePatientDto {
  @IsString()
  @IsNotEmpty()
  public owner_address: string;

  @IsString()
  @IsNotEmpty()
  public owner_phone: string;
}
