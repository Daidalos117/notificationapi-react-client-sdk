import { InboxHeaderProps } from './InboxHeader';
import { NotificationPopupProps } from './NotificationPopup';
import { InAppNotification } from '@notificationapi/core/dist/interfaces';
import { ImageShape, Pagination } from './interface';

export type InboxProps = {
    pagination: keyof typeof Pagination;
    maxHeight: number;
    filter: NotificationPopupProps['filter'];
    imageShape: keyof typeof ImageShape;
    pageSize: number;
    pagePosition: NotificationPopupProps['pagePosition'];
    notificationRenderer: ((notification: InAppNotification[]) => JSX.Element) | undefined;
    header?: InboxHeaderProps;
};
export declare const Inbox: React.FC<InboxProps>;
