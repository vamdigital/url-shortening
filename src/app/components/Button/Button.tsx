'use client'
import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'small' | 'large'
type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
    isRounded?: boolean
    variant: ButtonVariant
    className?: string
    onClick?: () => void
  }
export const Button = ({
  children,
  isRounded,
  variant,
  className,
  onClick
}: ButtonProps) => {
  return (
    <button
      className={`${isRounded ? 'rounded-full' : 'rounded-xl'} ${variant === 'small' ? 'px-6 py-3 text-sm' : 'px-10 py-3'} bg-cyan font-bold  text-white transition-opacity   duration-300 ease-linear md:hover:bg-cyan/40 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
