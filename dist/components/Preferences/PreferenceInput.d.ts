import { BaseDeliveryOptions, DeliveryOptionsForEmail, DeliveryOptionsForInappWeb, GetPreferencesResponse } from '@notificationapi/core/dist/interfaces';
import { Channels } from '../Notifications/interface';

type Props = {
    preferences: GetPreferencesResponse['preferences'];
    notification: GetPreferencesResponse['notifications'][0];
    updateDelivery: (notificationId: string, channel: Channels, delivery: DeliveryOptionsForEmail | DeliveryOptionsForInappWeb | BaseDeliveryOptions, subNotificationId?: string) => void;
    subNotificationId?: string;
};
export declare const PreferenceInput: ({ notification, preferences, updateDelivery, subNotificationId }: Props) => JSX.Element;
export {};
