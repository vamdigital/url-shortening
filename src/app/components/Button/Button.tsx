import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'small' | 'large'
type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
    isRounded?: boolean
    variant: ButtonVariant
    className?: string
  }
export const Button = ({
  children,
  isRounded,
  variant,
  className
}: ButtonProps) => {
  return (
    <button
      className={`rounded-full ${isRounded ? 'rounded-full' : 'rounded-3xl'} ${variant === 'small' ? 'px-6 py-3 text-sm' : 'px-10 py-3'} bg-cyan font-bold text-white transition-opacity  duration-300 ease-linear hover:bg-cyan/40 ${className}`}
    >
      {children}
    </button>
  )
}
