import { UnreadBadgeProps } from './UnreadBadge';
import { NotificationProps } from './Notification';
import { InAppNotification } from '@notificationapi/core/dist/interfaces';
import { InboxHeaderProps } from './InboxHeader';
import { Filter, ImageShape, Pagination } from './interface';

export type NotificationPopupProps = {
    buttonIcon?: React.ReactNode;
    buttonIconSize?: number;
    buttonWidth?: number;
    buttonHeight?: number;
    popupWidth?: number | string;
    popupHeight?: number;
    imageShape?: keyof typeof ImageShape;
    iconColor?: string;
    pagination?: keyof typeof Pagination;
    pageSize?: number;
    pagePosition?: 'top' | 'bottom';
    popupZIndex?: number;
    unreadBadgeProps?: UnreadBadgeProps;
    count?: UnreadBadgeProps['count'];
    filter?: keyof typeof Filter | ((n: InAppNotification) => boolean);
    renderers?: {
        notification?: NotificationProps['renderer'];
    };
    header?: InboxHeaderProps;
};
export declare const NotificationPopup: React.FC<NotificationPopupProps>;
