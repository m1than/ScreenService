import { Module } from '@nestjs/common';
import { SpeechGeneratorService } from './speech-generator.service';
import { SpeechGeneratorController } from './speech-generator.controller';
import {HttpModule} from "@nestjs/axios";
import {IntegratorService} from "../integrator/integrator.service";

@Module({
  controllers: [SpeechGeneratorController],
  providers: [SpeechGeneratorService, IntegratorService],
  imports: [HttpModule]
})
export class SpeechGeneratorModule {}
