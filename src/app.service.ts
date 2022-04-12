import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppointmentService } from './appointment/appointment.service';
import { PatientService } from './patient/patient.service';

@Injectable()
export class AppService {
  constructor(
    private patientServices: PatientService,
    private appointmentServices: AppointmentService,
  ) {}

  async getUnpaidAppointments() {
    const unpaidAppointments = await this.appointmentServices.findUnpaid();
    if (!unpaidAppointments) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There is no unpaid appointments`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return unpaidAppointments;
  }

  async upaidAppointmentByPatient(patientId: number) {
    const upaidByPatient = await this.appointmentServices.findUnpaidByPatient(
      patientId,
    );
    if (!upaidByPatient) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There is no unpaid appointments by this patient`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return upaidByPatient;
  }

  async getBalanceStatistics() {
    
  }

  async getPetStatistics() {

  }
}
