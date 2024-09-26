export declare enum Pagination {
    INFINITE_SCROLL = "infinite_scroll",
    PAGINATED = "paginated"
}
export declare enum ImageShape {
    square = "square",
    circle = "circle"
}
export declare enum Filter {
    ALL = "ALL",
    UNARCHIVED = "UNARCHIVED"
}
export declare enum Channels {
    EMAIL = "EMAIL",
    INAPP_WEB = "INAPP_WEB",
    SMS = "SMS",
    CALL = "CALL",
    PUSH = "PUSH",
    WEB_PUSH = "WEB_PUSH"
}
export declare enum DeliveryOptions {
    OFF = "off",
    INSTANT = "instant",
    HOURLY = "hourly",
    DAILY = "daily",
    WEEKLY = "weekly",
    MONTHLY = "monthly"
}
export declare enum COUNT_TYPE {
    COUNT_UNOPENED_NOTIFICATIONS = "COUNT_UNOPENED_NOTIFICATIONS",
    COUNT_UNARCHIVED_NOTIFICATIONS = "COUNT_UNARCHIVED_NOTIFICATIONS"
}
export declare enum Position {
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right"
}
export declare const NOTIFICATION_ACTIONS: {
    opened: string;
    clicked: string;
    archived: string;
    replied: string;
    actioned1: string;
    actioned2: string;
};
