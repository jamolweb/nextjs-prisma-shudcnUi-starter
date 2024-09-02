import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
	return (
		<input
			className={`w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
			{...props}
		/>
	)
}
