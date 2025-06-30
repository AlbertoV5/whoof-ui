import type { ReactNode } from 'react'
import { OutOfBounds } from '../components/OutOfBounds'
import { Unauthorized } from '../components/Unauthorized'
import { NoExperience } from '../components/NoExperience'
import type {
	LayoutOptions,
	LayoutFunction,
	WithLayoutResult,
	ThemeConfig,
	LayoutProps
} from '../types'

export function withLayout<T = any>(
	themeConfig: ThemeConfig,
	options: LayoutOptions<T>
): LayoutFunction<T> {
	const {
		components: { DeveloperContent, AdminContent, UserContent },
		getAuthenticatedUser,
		getExperience,
		fetchAdditionalData
	} = options

	return async function Layout({ children, params }: WithLayoutResult): Promise<ReactNode> {
		try {
			const { experienceId } = await params

			if (!experienceId) {
				return (
					<OutOfBounds
						themeConfig={themeConfig.themeConfig}
						appId={themeConfig.appId}
						fonts={themeConfig.fonts}
					/>
				)
			}

			// Get authenticated user
			const userData = await getAuthenticatedUser(experienceId)
			if (!userData) {
				return (
					<Unauthorized
						themeConfig={themeConfig.themeConfig}
						appId={themeConfig.appId}
						fonts={themeConfig.fonts}
					/>
				)
			}

			// Get experience data
			const experience = await getExperience(experienceId)
			if (!experience) {
				return (
					<NoExperience
						themeConfig={themeConfig.themeConfig}
						appId={themeConfig.appId}
						fonts={themeConfig.fonts}
					/>
				)
			}

			// Fetch additional data if provided
			const additionalData = fetchAdditionalData
				? await fetchAdditionalData(userData, experienceId)
				: undefined

			const owner = {
				id: experience.company.id,
				username: experience.company.title,
				name: experience.company.title,
			}

			const layoutProps: LayoutProps<T> = {
				...themeConfig,
				experienceId,
				userData,
				owner,
				additionalData
			}

			// Render based on user role
			if (userData.userStatus === "developer") {
				return <DeveloperContent {...layoutProps} />
			}

			if (userData.userAccessLevel === "admin") {
				return <AdminContent {...layoutProps} />
			}

			return <UserContent {...layoutProps} />

		} catch (error) {
			console.error('[withLayout] Error:', error)
			return (
				<Unauthorized
					themeConfig={themeConfig.themeConfig}
					appId={themeConfig.appId}
					fonts={themeConfig.fonts}
					message="An error occurred while loading the page. Please try again."
				/>
			)
		}
	}
}