import React from 'react'

type ButtonVariant = 'default' | 'ghost'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	className?: string
	variant?: ButtonVariant
}

export const Button: React.FC<ButtonProps> = ({
	children,
	className = '',
	variant = 'default',
	...props
}) => {
	const baseClasses = 'px-4 py-2 rounded-md transition duration-200'
	const variantClasses = {
		default: 'bg-blue-500 text-white hover:bg-blue-600',
		ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
	}

	return (
		<button
			className={`${baseClasses} ${variantClasses[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}
