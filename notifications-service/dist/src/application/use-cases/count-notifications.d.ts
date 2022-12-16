import { NotificationsRepository } from '../repositories/notifications-repository';
interface CountNotificationRequest {
    notificationId: string;
}
type CountNotificationResponse = void;
export declare class CountNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: CountNotificationRequest): Promise<CountNotificationResponse>;
}
export {};
