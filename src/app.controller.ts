import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('unpaid-appointments')
  getUnpaid() {
    return this.appService.getUnpaidAppointments();
  }

  @Get('unpaid-appointments:id')
  getUnpaidByPatient(@Param('id') id: number) {
    return this.appService.unpaidAppointmentByPatient(id);
  }

  @Get('balance-statistics')
  getBalance() {
    return this.appService.getBalanceStatistics();
  }

  @Get('pet-statistics')
  getPet() {
    return this.appService.getPetStatistics();
  }
}
