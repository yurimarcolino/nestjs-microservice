import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Notification } from '@application/entities/notification';
import { PrismaService } from '../prisma.service';
export declare class PrismaNotificationRepository implements NotificationsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(notification: Notification): Promise<void>;
    findById(notificationId: string): Promise<Notification | null>;
    findManyByRecipientId(recipientId: string): Promise<Notification[]>;
    countManyByRecipientId(recipientId: string): Promise<number>;
    save(notification: Notification): Promise<void>;
}
