import { PropsWithChildren } from 'react';
import { NotificationPopupProps } from './NotificationPopup';
import { InAppNotification } from '@notificationapi/core/dist/interfaces';
import { COUNT_TYPE } from './interface';

export type UnreadBadgeProps = {
    color?: 'blue' | 'purple' | 'cyan' | 'green' | 'magenta' | 'pink' | 'red' | 'orange' | 'yellow' | 'volcano' | 'geekblue' | 'lime' | 'gold' | undefined;
    overflowCount?: number;
    dot?: boolean;
    showZero?: boolean;
    size?: 'default' | 'small';
    style?: React.CSSProperties;
    count?: keyof typeof COUNT_TYPE | ((notification: InAppNotification) => boolean);
    filter?: NotificationPopupProps['filter'];
};
export declare const UnreadBadge: React.FunctionComponent<PropsWithChildren<UnreadBadgeProps>>;
