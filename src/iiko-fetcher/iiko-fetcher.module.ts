import { Module } from '@nestjs/common';
import { IikoFetcherService } from './iiko-fetcher.service';
import { IikoFetcherController } from './iiko-fetcher.controller';
import {HttpModule} from "@nestjs/axios";

@Module({
  controllers: [IikoFetcherController],
  providers: [IikoFetcherService],
  imports: [HttpModule]
})
export class IikoFetcherModule {}
