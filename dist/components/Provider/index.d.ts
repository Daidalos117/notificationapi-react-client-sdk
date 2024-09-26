import { PropsWithChildren } from 'react';
import { NotificationAPIClientSDK } from '@notificationapi/core';
import { GetPreferencesResponse, InAppNotification, BaseDeliveryOptions, Channels, DeliveryOptionsForEmail, DeliveryOptionsForInappWeb } from '@notificationapi/core/dist/interfaces';

export type Context = {
    notifications?: InAppNotification[];
    preferences?: GetPreferencesResponse;
    loadNotifications: (initial?: boolean) => void;
    markAsOpened: () => void;
    markAsArchived: (ids: string[] | 'ALL') => void;
    markAsUnarchived: (ids: string[] | 'ALL') => void;
    markAsClicked: (ids: string[]) => void;
    updateDelivery: (notificationId: string, channel: Channels, delivery: DeliveryOptionsForEmail | DeliveryOptionsForInappWeb | BaseDeliveryOptions, subNotificationId?: string) => void;
    updateDeliveries: (params: {
        notificationId: string;
        channel: Channels;
        delivery: DeliveryOptionsForEmail | DeliveryOptionsForInappWeb | BaseDeliveryOptions;
        subNotificationId?: string;
    }[]) => void;
    client: typeof NotificationAPIClientSDK;
};
export declare const NotificationAPIContext: import('react').Context<Context | undefined>;
type Props = {
    clientId: string;
    userId: string;
    hashedUserId?: string;
    apiURL?: string;
    wsURL?: string;
    initialLoadMaxCount?: number;
    initialLoadMaxAge?: Date;
    playSoundOnNewNotification?: boolean;
    newNotificationSoundPath?: string;
};
export declare const NotificationAPIProvider: React.FunctionComponent<PropsWithChildren<Props>> & {
    useNotificationAPIContext: typeof useNotificationAPIContext;
};
declare const useNotificationAPIContext: () => Context;
export {};
