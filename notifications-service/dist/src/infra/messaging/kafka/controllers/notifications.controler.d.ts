import { SendNotification } from '@application/use-cases/send-notification';
interface SendNotificationPayload {
    content: string;
    category: string;
    recipientId: string;
}
export declare class NotificationsController {
    private sendNotification;
    constructor(sendNotification: SendNotification);
    handleSendNotification({ category, content, recipientId }: SendNotificationPayload): Promise<void>;
}
export {};
