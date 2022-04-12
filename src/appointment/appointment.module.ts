import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { Patient } from 'src/patient/entities/patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment, Patient])],
  providers: [AppointmentService],
})
export class AppointmentModule {}
