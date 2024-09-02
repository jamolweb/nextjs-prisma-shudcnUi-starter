"use client"

import React, { useEffect, useState } from 'react'

interface ToastProps {
	message: string
	type?: 'success' | 'error' | 'info'
	duration?: number
}

export const Toast: React.FC<ToastProps> = ({
	message,
	type = 'info',
	duration = 3000,
}) => {
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false)
		}, duration)

		return () => clearTimeout(timer)
	}, [duration])

	if (!visible) return null

	const bgColor = {
		success: 'bg-green-500',
		error: 'bg-red-500',
		info: 'bg-blue-500',
	}[type]

	return (
		<div
			className={`fixed bottom-4 right-4 p-4 rounded-md text-white ${bgColor}`}
		>
			{message}
		</div>
	)
}

interface ToasterProps {
	richColors?: boolean
}

export const Toaster: React.FC<ToasterProps> = ({ richColors = false }) => {
	return null
}

export const toast = {
	success: (message: string) => console.log('Success toast:', message),
	error: (message: string) => console.log('Error toast:', message),
	info: (message: string) => console.log('Info toast:', message),
}
