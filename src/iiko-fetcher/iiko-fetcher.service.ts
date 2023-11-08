import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {Order} from "./Entities/Order";
import Config from "./config";
@Injectable()
export class IikoFetcherService {
    constructor(private readonly httpService : HttpService) {}
    async GetAllNotCompletedOrders(): Promise<Order[]> {
        const {data} = await this.httpService.axiosRef.get(Config.host + '/notCompleted');
        return data;
    }
    async GetAllCompletedOrders(): Promise<Order[]> {
        const {data} = await this.httpService.axiosRef.get(Config.host + '/completed');
        return data;
    }
}
