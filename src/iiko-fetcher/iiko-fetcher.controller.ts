import {Controller, Get} from '@nestjs/common';
import { IikoFetcherService } from './iiko-fetcher.service';
import {Order} from "./Entities/Order";

@Controller('iiko-fetcher')
export class IikoFetcherController {
  constructor(private readonly iikoFetcherService: IikoFetcherService) {}

  @Get("notCompleted")
  async getAllNotCompleted(): Promise<Order[]>{
    const orders = await this.iikoFetcherService.GetAllNotCompletedOrders();
    return orders;
  }
  @Get("completed")
  async getAllCompleted(): Promise<Order[]> {
    const orders = await this.iikoFetcherService.GetAllCompletedOrders();
    return orders;
  }
}
