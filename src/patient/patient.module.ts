import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { AppointmentController } from 'src/appointment/appointment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  controllers: [AppointmentController],
  providers: [PatientService],
})
export class PatientModule {}
