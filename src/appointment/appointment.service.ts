import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from 'src/patient/entities/patient.entity';
import { Repository } from 'typeorm';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment } from './entities/appointment.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) {}

  async create(
    createAppointmentDto: CreateAppointmentDto,
    patientId: number,
  ): Promise<Appointment> {
    const patient = await this.patientRepository.findOne(patientId);

    if (!patient) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There is no patient with this id: ${patientId}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    const appointment = new Appointment();

    appointment.start_time = createAppointmentDto.start_time;
    appointment.end_time = createAppointmentDto.end_time;
    appointment.description = createAppointmentDto.description;
    appointment.fee_amount = createAppointmentDto.fee_amount;
    appointment.fee_status = createAppointmentDto.fee_status;
    appointment.fee_currency = createAppointmentDto.fee_currency;
    appointment.patient = patient;
    return this.appointmentRepository.save(appointment);
  }

  async findAll(patientId: number): Promise<Appointment[]> {
    return this.appointmentRepository.find({
      where: {
        patient: patientId,
      },
    });
  }

  async findOne(id: number): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findOne(id);
    if (!appointment) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There is no appointment with this id: ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return appointment;
  }

  async update(
    id: number,
    updateAppointmentDto: UpdateAppointmentDto,
  ): Promise<void> {
    const appointment = await this.appointmentRepository.findOne(id);
    if (!appointment) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There is no appointment with this id: ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    await this.appointmentRepository.update(id, updateAppointmentDto);
  }

  async remove(id: number): Promise<void> {
    const appointment = await this.appointmentRepository.findOne(id);
    if (!appointment) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There is no appointment with this id: ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    await this.appointmentRepository.delete(id);
  }
}
