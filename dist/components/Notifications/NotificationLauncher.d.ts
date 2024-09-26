import { NotificationPopupProps } from './NotificationPopup';
import { Position } from './interface';

type NotificationLaucherProps = NotificationPopupProps & {
    position?: keyof typeof Position;
    offsetX?: number | string;
    offsetY?: number | string;
};
export declare const NotificationLauncher: React.FC<NotificationLaucherProps>;
export {};
