import { NotificationsRepository } from '../repositories/notifications-repository';
import { Notification } from '@application/entities/notification';
interface GetRecipientNotificationsRequest {
    recipientId: string;
}
type GetRecipientNotificationsResponse = {
    notifications: Notification[];
};
export declare class GetRecipientNotifications {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse>;
}
export {};
