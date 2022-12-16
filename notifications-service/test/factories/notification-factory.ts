import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type OverideProps = Partial<NotificationProps>;

export function makeNotification(overide: OverideProps = {}) {
  return new Notification({
    category: 'social',
    content: new Content('New friendship request'),
    recipientId: 'recipient-2',
    ...overide,
  });
}
