import React from 'react'
import { WhopThemeScript } from '@whop/react'
import { Theme } from 'frosted-ui'
import type { ThemeProps } from 'frosted-ui/theme'

export interface UnauthorizedProps {
	themeConfig: ThemeProps
	appId: string
	fonts: string
	message?: string
	showPurchaseLink?: boolean
	purchaseUrl?: string
}

export const Unauthorized = ({
	themeConfig,
	appId,
	fonts,
	message = "You are not authorized to view this page. You must purchase a product first.",
	showPurchaseLink = false,
	purchaseUrl
}: UnauthorizedProps) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<WhopThemeScript />
			</head>
			<body className={fonts}>
				<Theme {...themeConfig}>
					<div className="flex flex-col items-center justify-center h-screen space-y-4">
						<p className="text-center max-w-md">{message}</p>
						{showPurchaseLink && purchaseUrl && (
							<a
								className="text-blue-9 hover:text-blue-10 font-medium"
								href={purchaseUrl}
							>
								Purchase Access
							</a>
						)}
					</div>
				</Theme>
			</body>
		</html>
	)
} 