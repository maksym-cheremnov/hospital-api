import { Patient } from 'src/patient/entities/patient.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export enum Currencies {
  BTC = 'BTC',
  USD = 'USD',
  EUR = 'EUR',
}

export enum Statuses {
  UNPAID = 'Unpaid',
  PAID = 'Paid',
}

@Entity({ name: 'appointment' })
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @Column()
  description: string;

  @Column()
  fee_amount: string;

  @Column()
  fee_status: Statuses;

  @Column()
  fee_currency: Currencies;

  @ManyToOne(() => Patient, (patient) => patient.appointments)
  patient: Patient;
}
