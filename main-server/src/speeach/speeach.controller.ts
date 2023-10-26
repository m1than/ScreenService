import { Controller } from '@nestjs/common';
import { SpeeachService } from './speeach.service';

@Controller('speeach')
export class SpeeachController {
  constructor(private readonly speeachService: SpeeachService) {}
}
