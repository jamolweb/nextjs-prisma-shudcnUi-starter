import React from 'react'

interface AvatarProps {
	className?: string
	children: React.ReactNode
}

export const AvatarFallback: React.FC<AvatarProps> = ({
	className,
	children,
}) => {
	return (
		<div
			className={`flex items-center justify-center ${className} rounded-full bg-gray-300 text-gray-700`}
		>
			{children}
		</div>
	)
}

export const Avatar: React.FC<AvatarProps> = ({ className, children }) => {
	return (
		<div
			className={`flex items-center justify-center ${className} rounded-full overflow-hidden bg-gray-200`}
		>
			{children}
		</div>
	)
}
