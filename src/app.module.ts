import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {HttpModule} from '@nestjs/axios'
import { IikoFetcherModule } from './iiko-fetcher/iiko-fetcher.module';
import { SpeechGeneratorModule } from './speech-generator/speech-generator.module';
import { IntegratorService } from './integrator/integrator.service';
import { VoicePlayerService } from './voice-player/voice-player.service';

@Module({
  imports: [IikoFetcherModule, SpeechGeneratorModule],
  controllers: [AppController],
  providers: [AppService, IntegratorService, VoicePlayerService],
})
export class AppModule {}
