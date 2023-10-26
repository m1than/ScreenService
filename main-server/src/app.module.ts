import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataWorkerModule } from './data-worker/data-worker.module';
import { SpeeachModule } from './speeach/speeach.module';

@Module({
  imports: [DataWorkerModule, SpeeachModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
