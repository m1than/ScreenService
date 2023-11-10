import {Controller, Get, Query} from '@nestjs/common';
import { SpeechGeneratorService } from './speech-generator.service';
import {IntegratorService} from "../integrator/integrator.service";

@Controller('speech-generator')
export class SpeechGeneratorController {
  constructor(private readonly speechGeneratorService: SpeechGeneratorService, private readonly integratorService: IntegratorService) {}

  @Get()
  async getSpeech(@Query('words') words: string): Promise<object> {
    const response = await this.speechGeneratorService.GetVoice(words);
    await this.integratorService.IntegrateIntoMP3(response);
    return {status_code: 'success'};
  }
}
