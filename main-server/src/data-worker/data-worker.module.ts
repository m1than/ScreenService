import { Module } from '@nestjs/common';
import { DataWorkerService } from './data-worker.service';
import { DataWorkerController } from './data-worker.controller';

@Module({
  controllers: [DataWorkerController],
  providers: [DataWorkerService],
})
export class DataWorkerModule {}
