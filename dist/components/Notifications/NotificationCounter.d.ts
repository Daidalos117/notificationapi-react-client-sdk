import { PropsWithChildren } from 'react';
import { UnreadBadgeProps } from './UnreadBadge';

export type NotificationCounterProps = Omit<UnreadBadgeProps, 'count'> & {
    count?: UnreadBadgeProps['count'];
};
export declare const NotificationCounter: React.FC<PropsWithChildren<NotificationCounterProps>>;
