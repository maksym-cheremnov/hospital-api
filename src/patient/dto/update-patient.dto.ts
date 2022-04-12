import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePatientDto {
  @IsString()
  @IsNotEmpty()
  public owner_address: string;

  @IsString()
  @IsNotEmpty()
  public owner_phone: string;
}
