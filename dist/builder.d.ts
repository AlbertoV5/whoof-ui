import type { UserData, WhopExperience } from '@whoof/auth';
import type { ReactNode } from 'react';
import type { Sdk } from '@whop/api';
import React from 'react';
type ViewType<TData = Record<string, any>> = React.ComponentType<{
    experience: WhopExperience;
    user: UserData;
} & TData>;
export declare function AppBuilder<TData = Record<string, any>>({ children, params, whopSdk, appConfig, appView, getUser, fetchData, }: {
    children: ReactNode;
    params: Promise<{
        experienceId: string;
    }>;
    whopSdk: Sdk;
    appView: {
        user: ViewType<TData>;
        creator: ViewType<TData>;
        developer: ViewType<TData>;
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
    }) => Promise<TData> | null;
}): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
