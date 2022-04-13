import { forwardRef, Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { AppointmentController } from './appointment.controller';
import { Patient } from 'src/patient/entities/patient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment, Patient])],
  controllers: [AppointmentController],
  providers: [AppointmentService],
  exports: [AppointmentService],
})
export class AppointmentModule {}
