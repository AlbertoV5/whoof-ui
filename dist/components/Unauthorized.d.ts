import type { ThemeProps } from 'frosted-ui/theme';
export interface UnauthorizedProps {
    themeConfig: ThemeProps;
    appId: string;
    fonts: string;
    message?: string;
    showPurchaseLink?: boolean;
    purchaseUrl?: string;
}
export declare const Unauthorized: ({ themeConfig, appId, fonts, message, showPurchaseLink, purchaseUrl }: UnauthorizedProps) => import("react/jsx-runtime").JSX.Element;
