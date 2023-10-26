import { PartialType } from '@nestjs/mapped-types';
import { CreateDataWorkerDto } from './create-data-worker.dto';

export class UpdateDataWorkerDto extends PartialType(CreateDataWorkerDto) {}
