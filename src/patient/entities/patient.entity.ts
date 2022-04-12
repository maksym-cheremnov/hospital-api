import { Appointment } from 'src/appointment/entities/appointment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

export enum PetType {
  CAT = 'Cat',
  DOG = 'Dog',
  BIRD = 'Bird',
}

@Entity({ name: 'patient' })
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pet_name: string;

  @Column()
  pet_type: PetType;

  @Column()
  owner_name: string;

  @Column()
  owner_address: string;

  @Column()
  owner_phone: string;

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments: Appointment[];
}
