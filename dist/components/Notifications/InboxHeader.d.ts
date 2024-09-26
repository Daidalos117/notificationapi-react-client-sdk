/// <reference types="react" />
export type InboxHeaderProps = {
    title?: JSX.Element;
    button1ClickHandler?: (ids: string[] | 'ALL') => void;
    button2ClickHandler?: () => void;
};
export declare const InboxHeader: (props: InboxHeaderProps) => JSX.Element;
