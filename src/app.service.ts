import { Body, Injectable, Post } from '@nestjs/common';
import { AppointmentService } from './appointment/appointment.service';
import { CreatePatientDto } from './patient/dto/create-patient.dto';
import { PatientService } from './patient/patient.service';

@Injectable()
export class AppService {
  constructor(
    private patientServices: PatientService,
    private appointmentServices: AppointmentService,
  ) {}

  async appointmentsByDate() {}

  async getUnpaidAppointments() {}

  async upaidAppointmentByPatient() {}

  async getBalanceStatistics() {}

  async getPetStatistics() {}
}
