'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'

export function DropdownMenu({ children }: any) {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => setIsOpen(!isOpen)

	return (
		<div className='relative'>
			<div onClick={toggleMenu}>{children[0]}</div>
			{isOpen && (
				<div className='absolute z-10 mt-2 w-48 bg-white shadow-lg rounded'>
					{children[1]}
				</div>
			)}
		</div>
	)
}

export function DropdownMenuTrigger({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}

export function DropdownMenuContent({
	children,
	align = 'start',
}: {
	children: React.ReactNode
	align?: string
}) {
	return (
		<div className={`p-2 ${align === 'end' ? 'text-right' : ''}`}>
			{children}
		</div>
	)
}

export function DropdownMenuItem({
	children,
	onClick,
}: {
	children: React.ReactNode
	onClick?: () => void
}) {
	return (
		<div className='p-2 cursor-pointer hover:bg-gray-100' onClick={onClick}>
			{children}
		</div>
	)
}

export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button>
					<SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => setTheme('light')}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
