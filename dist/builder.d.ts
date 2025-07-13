import type { UserData, WhopExperience } from '@whoof/auth';
import type { ReactNode } from 'react';
import type { Sdk } from '@whop/api';
import React from 'react';
type ViewType = React.ComponentType<any>;
export declare function AppBuilder({ children, params, whopSdk, appConfig, appView, getUser, fetchData, }: {
    children: ReactNode;
    params: Promise<{
        experienceId: string;
    }>;
    whopSdk: Sdk;
    appView: {
        User: ViewType;
        Creator: ViewType;
        Developer: ViewType;
    };
    appConfig: {
        themeConfig: Record<string, any>;
        fonts: string;
        appId: string;
    };
    getUser: (experienceId: string) => Promise<UserData | null>;
    fetchData?: (params: {
        user: UserData;
        experience: WhopExperience;
    }) => Promise<Record<string, any>> | null;
}): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
