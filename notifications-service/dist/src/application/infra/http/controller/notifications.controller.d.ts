import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from '@application/use-cases/send-notification';
export declare class NotificationsController {
    private sendNotification;
    constructor(sendNotification: SendNotification);
    create(body: CreateNotificationBody): Promise<{
        notification: {
            id: string;
            content: string;
            category: string;
            recipientId: string;
        };
    }>;
}
