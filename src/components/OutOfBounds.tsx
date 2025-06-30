import React from 'react'
import { WhopThemeScript } from '@whop/react'
import { Theme } from 'frosted-ui'
import type { ThemeProps } from 'frosted-ui/theme'

export interface OutOfBoundsProps {
	themeConfig: ThemeProps
	appId: string
	fonts: string
	message?: string
	installUrl?: string
}

export const OutOfBounds = ({
	themeConfig,
	appId,
	fonts,
	message = "Please install this app via Whop.",
	installUrl
}: OutOfBoundsProps) => {
	const defaultInstallUrl = `https://whop.com/apps/${appId}/install/`
	const finalInstallUrl = installUrl || defaultInstallUrl

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<WhopThemeScript />
			</head>
			<body className={fonts}>
				<Theme {...themeConfig}>
					<div className="flex flex-col items-center justify-center h-screen">
						<p>
							{message.split('install').length > 1 ? (
								<>
									{message.split('install')[0]}
									<a
										className="text-blue-9 hover:text-blue-10"
										href={finalInstallUrl}
									>
										install
									</a>
									{message.split('install')[1]}
								</>
							) : (
								<>
									{message}{' '}
									<a
										className="text-blue-9 hover:text-blue-10"
										href={finalInstallUrl}
									>
										Install here
									</a>
								</>
							)}
						</p>
					</div>
				</Theme>
			</body>
		</html>
	)
} 