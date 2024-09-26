import { InAppNotification } from '@notificationapi/core/dist/interfaces';
import { ImageShape } from './interface';

export type NotificationProps = {
    notifications: InAppNotification[];
    markAsArchived: (ids: string[] | 'ALL') => void;
    markAsClicked: (ids: string[]) => void;
    imageShape: keyof typeof ImageShape;
    renderer?: (notification: InAppNotification[]) => JSX.Element;
};
export declare const Notification: (props: NotificationProps) => JSX.Element;
