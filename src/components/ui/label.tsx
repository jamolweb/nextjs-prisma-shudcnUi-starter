import React from 'react'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode
	className?: string
}

export const Label: React.FC<LabelProps> = ({
	children,
	className = '',
	...props
}) => {
	return (
		<label className={`block font-medium text-sm ${className}`} {...props}>
			{children}
		</label>
	)
}
