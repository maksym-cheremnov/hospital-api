import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { AppointmentModule } from './appointment/appointment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patient/entities/patient.entity';
import { Appointment } from './appointment/entities/appointment.entity';
import { ConfigModule } from '@nestjs/config';
import { PatientService } from './patient/patient.service';
import { AppointmentService } from './appointment/appointment.service';
import { PatientController } from './patient/patient.controller';
import { AppointmentController } from './appointment/appointment.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Patient, Appointment],
      synchronize: true,
    }),
    PatientModule,
    AppointmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
