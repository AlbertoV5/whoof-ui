/**
 * Example migration from existing layout.tsx to @whoof/ui
 * 
 * This shows how your current layout.tsx would be transformed
 * to use the @whoof/ui package's withExperienceLayout HOF
 * 
 * NOTE: This is just an example file - the imports below are
 * placeholders that would exist in your actual application
 */

import type { ReactNode } from 'react'
import { withExperienceLayout } from '@whoof/ui'
import { whopSdk } from '@/lib/whop/whop-api'
import { AdminContent } from '@/components/app/admin'
import { UserContent } from '@/components/app/user/user-content'
import { DeveloperContent } from '@/components/app/developer'
import { appId, fonts, themeConfig } from '@/components/constants'
import { withExperienceContext } from '@whoof/auth'
import { getAuthenticatedUser } from '@/lib/context/credentials'
import * as CompetitionsAPI from '@/lib/api/competitions'
import { getUserPlan } from '@/lib/api'
import 'frosted-ui/styles.css'

// BEFORE: Your existing layout was ~88 lines with lots of logic
// AFTER: Clean and declarative with the HOF

export default withExperienceLayout(
	{
		themeConfig,
		appId,
		fonts
	},
	{
		components: {
			DeveloperContent: ({ userId, experienceId, owner, additionalData }) => (
				<DeveloperContent
					userId={userId}
					completedCompetitions={additionalData?.completedCompetitions || []}
					currentCompetitions={additionalData?.currentCompetitions || []}
					experienceId={experienceId}
					userPlan={additionalData?.userPlan}
					owner={owner}
				/>
			),
			AdminContent: ({ userId, experienceId, additionalData }) => (
				<AdminContent
					userId={userId}
					completedCompetitions={additionalData?.completedCompetitions || []}
					currentCompetitions={additionalData?.currentCompetitions || []}
					experienceId={experienceId}
				/>
			),
			UserContent: ({ userId, experienceId, owner, additionalData }) => (
				<UserContent
					userId={userId}
					completedCompetitions={additionalData?.completedCompetitions || []}
					currentCompetitions={additionalData?.currentCompetitions || []}
					experienceId={experienceId}
					userPlan={additionalData?.userPlan}
					owner={owner}
				/>
			)
		},
		getAuthenticatedUser,
		getExperience: async (experienceId: string) => {
			return await whopSdk.experiences.getExperience({ experienceId })
		},
		fetchAdditionalData: async (userData, experienceId) => {
			// Fetch all data in parallel once we have user data
			const [userPlan, currentCompetitions, completedCompetitions] = await Promise.all([
				getUserPlan(userData.userId, experienceId),
				CompetitionsAPI.list({ completed: false }),
				CompetitionsAPI.list({ completed: true }),
			])

			return {
				userPlan,
				currentCompetitions,
				completedCompetitions
			}
		},
		withExperienceContext
	}
)

/**
 * Benefits of this approach:
 * 1. ✅ Eliminates boilerplate error handling code
 * 2. ✅ Automatic authentication and authorization checks
 * 3. ✅ Built-in error states (OutOfBounds, Unauthorized, NoExperience)
 * 4. ✅ Type-safe component props
 * 5. ✅ Reusable across multiple apps
 * 6. ✅ Consistent error handling and UX
 * 7. ✅ Easy to maintain and test
 */ 