import type { ThemeProps } from 'frosted-ui/theme';
export interface OutOfBoundsProps {
    themeConfig: ThemeProps;
    appId: string;
    fonts: string;
    message?: string;
    installUrl?: string;
}
export declare const OutOfBounds: ({ themeConfig, appId, fonts, message, installUrl }: OutOfBoundsProps) => import("react/jsx-runtime").JSX.Element;
