import type { ReactNode } from 'react'
import { OutOfBounds } from '../components/OutOfBounds'
import { Unauthorized } from '../components/Unauthorized'
import { NoExperience } from '../components/NoExperience'
import type {
	UserData,
	Experience,
	Owner,
	ThemeConfig,
	WithLayoutResult
} from '../types'

export interface ExperienceLayoutComponents<T = any> {
	DeveloperContent: (props: {
		userId: string
		experienceId: string
		owner: Owner
		additionalData?: T
		children?: ReactNode
	}) => ReactNode
	AdminContent: (props: {
		userId: string
		experienceId: string
		additionalData?: T
		children?: ReactNode
	}) => ReactNode
	UserContent: (props: {
		userId: string
		experienceId: string
		owner: Owner
		additionalData?: T
		children?: ReactNode
	}) => ReactNode
}

export interface ExperienceLayoutOptions<T = any> {
	components: ExperienceLayoutComponents<T>
	getAuthenticatedUser: (experienceId: string) => Promise<UserData | null>
	getExperience: (experienceId: string) => Promise<Experience | null>
	fetchAdditionalData?: (userData: UserData, experienceId: string) => Promise<T>
	withExperienceContext?: <R>(experienceId: string, fn: () => Promise<R>) => Promise<R>
}

export function withExperienceLayout<T = any>(
	themeConfig: ThemeConfig,
	options: ExperienceLayoutOptions<T>
) {
	const {
		components: { DeveloperContent, AdminContent, UserContent },
		getAuthenticatedUser,
		getExperience,
		fetchAdditionalData,
		withExperienceContext
	} = options

	return async function Layout({ children, params }: WithLayoutResult): Promise<ReactNode> {
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

		try {
			const layoutLogic = async () => {
				const userData = await getAuthenticatedUser(experienceId)
				if (!userData) {
					throw new Error("Unauthorized")
				}

				// Fetch additional data and experience in parallel
				const [additionalData, experience] = await Promise.all([
					fetchAdditionalData ? fetchAdditionalData(userData, experienceId) : Promise.resolve(undefined),
					getExperience(experienceId)
				])

				if (!experience) {
					return (
						<NoExperience
							themeConfig={themeConfig.themeConfig}
							appId={themeConfig.appId}
							fonts={themeConfig.fonts}
						/>
					)
				}

				const owner = {
					id: experience.company.id,
					username: experience.company.title,
					name: experience.company.title,
				}

				// Render based on user role
				if (userData.userStatus === "developer") {
					return (
						<DeveloperContent
							userId={userData.userId}
							experienceId={experienceId}
							owner={owner}
							additionalData={additionalData}
						>
							{children}
						</DeveloperContent>
					)
				}

				if (userData.userAccessLevel === "admin") {
					return (
						<AdminContent
							userId={userData.userId}
							experienceId={experienceId}
							additionalData={additionalData}
						>
							{children}
						</AdminContent>
					)
				}

				return (
					<UserContent
						userId={userData.userId}
						experienceId={experienceId}
						owner={owner}
						additionalData={additionalData}
					>
						{children}
					</UserContent>
				)
			}

			if (withExperienceContext) {
				return await withExperienceContext(experienceId, layoutLogic)
			} else {
				return await layoutLogic()
			}

		} catch (error) {
			console.error('[ExperienceLayout] Authentication error:', error)
			return (
				<Unauthorized
					themeConfig={themeConfig.themeConfig}
					appId={themeConfig.appId}
					fonts={themeConfig.fonts}
				/>
			)
		}
	}
}