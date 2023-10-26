import { Module } from '@nestjs/common';
import { SpeeachService } from './speeach.service';
import { SpeeachController } from './speeach.controller';

@Module({
  controllers: [SpeeachController],
  providers: [SpeeachService],
})
export class SpeeachModule {}
