import { Test, TestingModule } from '@nestjs/testing';
import { VoicePlayerService } from './voice-player.service';

describe('VoicePlayerService', () => {
  let service: VoicePlayerService;

  it('should be defined', () => {
    service.playSound("voices/file.mp3");
  });
});
