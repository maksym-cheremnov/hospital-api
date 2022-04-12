import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Currencies, Statuses } from '../entities/appointment.entity';

export class CreateAppointmentDto {
  @IsDate()
  @IsNotEmpty()
  public start_time: Date;

  @IsDate()
  @IsNotEmpty()
  public end_time: Date;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsDate()
  @IsNotEmpty()
  public fee_amount: Date;

  @IsNotEmpty()
  public fee_status: Statuses;

  @IsNotEmpty()
  public fee_currency: Currencies;
}
