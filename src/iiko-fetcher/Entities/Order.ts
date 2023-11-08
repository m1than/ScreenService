export interface Order {
    orderNumber: string;
    dateWithTime: Date;
    clientName: string;
    settings: object;
    formattedTime: string;
    elapsedTime: string;
}