import { Injectable } from '@nestjs/common';
import player from 'play-sound';
@Injectable()
export class VoicePlayerService {
    public playSound(src: string) {
        player({}).play(src);
    }
}
