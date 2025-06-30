import React from 'react'
import { WhopThemeScript } from '@whop/react'
import { Theme } from 'frosted-ui'
import type { ThemeProps } from 'frosted-ui/theme'

export interface NoExperienceProps {
	themeConfig: ThemeProps
	appId: string
	fonts: string
	message?: string
}

export const NoExperience = ({
	themeConfig,
	appId,
	fonts,
	message = "This experience does not exist."
}: NoExperienceProps) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<WhopThemeScript />
			</head>
			<body className={fonts}>
				<Theme {...themeConfig}>
					<div className="flex flex-col items-center justify-center h-screen">
						<p className="text-center max-w-md">{message}</p>
					</div>
				</Theme>
			</body>
		</html>
	)
} 