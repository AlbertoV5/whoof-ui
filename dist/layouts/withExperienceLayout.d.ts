import type { ReactNode } from 'react';
import type { UserData, Experience, Owner, ThemeConfig, WithLayoutResult } from '../types';
export interface ExperienceLayoutComponents<T = any> {
    DeveloperContent: (props: {
        userId: string;
        experienceId: string;
        owner: Owner;
        additionalData?: T;
        children?: ReactNode;
    }) => ReactNode;
    AdminContent: (props: {
        userId: string;
        experienceId: string;
        additionalData?: T;
        children?: ReactNode;
    }) => ReactNode;
    UserContent: (props: {
        userId: string;
        experienceId: string;
        owner: Owner;
        additionalData?: T;
        children?: ReactNode;
    }) => ReactNode;
}
export interface ExperienceLayoutOptions<T = any> {
    components: ExperienceLayoutComponents<T>;
    getAuthenticatedUser: (experienceId: string) => Promise<UserData | null>;
    getExperience: (experienceId: string) => Promise<Experience | null>;
    fetchAdditionalData?: (userData: UserData, experienceId: string) => Promise<T>;
    withExperienceContext?: <R>(experienceId: string, fn: () => Promise<R>) => Promise<R>;
}
export declare function withExperienceLayout<T = any>(themeConfig: ThemeConfig, options: ExperienceLayoutOptions<T>): ({ children, params }: WithLayoutResult) => Promise<ReactNode>;
