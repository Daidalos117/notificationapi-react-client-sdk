import { NotificationProps } from './Notification';
import { InboxHeaderProps } from './InboxHeader';
import { InAppNotification } from '@notificationapi/core/dist/interfaces';
import { Filter, ImageShape, Pagination } from './interface';

export type NotificationFeedProps = {
    imageShape?: keyof typeof ImageShape;
    pagination?: keyof typeof Pagination;
    pageSize?: number;
    pagePosition?: 'top' | 'bottom';
    infiniteScrollHeight?: number;
    style?: React.CSSProperties;
    filter?: keyof typeof Filter | ((n: InAppNotification) => boolean);
    renderers?: {
        notification?: NotificationProps['renderer'];
    };
    header?: InboxHeaderProps;
};
export declare const NotificationFeed: React.FC<NotificationFeedProps>;
