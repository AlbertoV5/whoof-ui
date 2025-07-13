import type { UserData, WhopExperience } from '@whoof/auth';
import type { ReactNode } from 'react';

import { NoExperience } from './components/NoExperience';
import { Unauthorized } from './components/Unauthorized';
import { OutOfBounds } from './components/OutOfBounds';
import { withExperience } from '@whoof/auth';
import type { Sdk } from '@whop/api';
import React from 'react';

type ViewType = React.ComponentType<any>

export async function AppBuilder({
	children,
	params,
	whopSdk,
	appConfig,
	appView,
	getUser,
	fetchData,
}: {
	children: ReactNode
	params: Promise<{ experienceId: string }>
	whopSdk: Sdk
	appView: {
		User: ViewType;
		Creator: ViewType;
		Developer: ViewType;
	}
	appConfig: {
		themeConfig: Record<string, any>,
		fonts: string,
		appId: string,
	}
	getUser: (experienceId: string) => Promise<UserData | null>
	fetchData?: (params: {
		user: UserData
		experience: WhopExperience
	}) => Promise<Record<string, any>> | null
}) {
	const { themeConfig, fonts, appId } = appConfig;
	const { experienceId } = await params;
	if (!experienceId) {
		return <OutOfBounds themeConfig={themeConfig} appId={appId} fonts={fonts} />
	}
	try {
		return await withExperience({
			sdk: whopSdk,
			experienceId,
			view: async (experience) => {
				const user = await getUser(experience.id)
				if (!user) {
					return <Unauthorized themeConfig={themeConfig} appId={appId} fonts={fonts} />
				}
				// Create owner object from experience
				const owner = {
					id: experience.company.id,
					username: experience.company.title,
					name: experience.company.title,
				};
				let viewProps = {
					experience,
					user,
					experienceId: experience.id,
					userId: user.userId,
					owner
				}
				if (fetchData) {
					const initialData = await fetchData({ user, experience })
					if (initialData) {
						viewProps = {
							...viewProps,
							...initialData
						}
					}
				}
				// Render view based on user status
				switch (user.userStatus) {
					case "developer":
						return <appView.Developer {...viewProps} />
					case "creator":
						return <appView.Creator {...viewProps} />
					case "user":
						return <appView.User {...viewProps} />
					default:
						return <Unauthorized themeConfig={themeConfig} appId={appId} fonts={fonts} />
				}
			},
		})
	} catch (error) {
		return <NoExperience themeConfig={themeConfig} appId={appId} fonts={fonts} />
	}
}