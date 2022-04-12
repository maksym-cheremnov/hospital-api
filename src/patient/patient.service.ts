import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient) private patientRepository: Repository<Patient>,
  ) {}

  async create(createPatientDto: CreatePatientDto): Promise<Patient> {
    const patient = new Patient();

    patient.pet_name = createPatientDto.pet_name;
    patient.pet_type = createPatientDto.pet_type;
    patient.owner_name = createPatientDto.owner_name;
    patient.owner_address = createPatientDto.owner_address;
    patient.owner_phone = createPatientDto.owner_phone;

    return this.patientRepository.save(patient);
  }

  async findAll(): Promise<Patient[]> {
    return this.patientRepository.find();
  }

  async findOne(id: number): Promise<Patient> {
    const patient = await this.patientRepository.findOne(id);
    if (!patient) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There is no patient with this id: ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return patient;
  }

  async update(id: number, updatePatientDto: UpdatePatientDto): Promise<void> {
    const patient = await this.patientRepository.findOne(id);
    if (!patient) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There is no patient with this id: ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    await this.patientRepository.update(id, updatePatientDto);
  }

  async remove(id: number): Promise<void> {
    const patient = await this.patientRepository.findOne(id);
    if (!patient) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `There is no patient with this id: ${id}`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    await this.patientRepository.delete(id);
  }

  async getMostPopular() {
    await this.patientRepository
      .createQueryBuilder('patient')
      .select('patient.pet_type', 'pet type')
      .distinct(true)
      .addSelect('patient.pet_type', 'count')
      .getCount();
  }
}
