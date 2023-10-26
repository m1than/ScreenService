import { Controller, Get } from '@nestjs/common';
import { DataWorkerService } from './data-worker.service';

@Controller('data-worker')
export class DataWorkerController {
  constructor(private readonly dataWorkerService: DataWorkerService) {}
  @Get()
  findAll() {
    return this.dataWorkerService.findAll();
  }
}
