import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'outline' | 'solid' | 'gradient'
export type ButtonSize = 'sm' | 'lg'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  outline:
    'border border-white bg-transparent text-primary',
  solid: 'bg-accent text-primary',
  gradient: 'bg-gradient-to-r from-accent to-accent-dark text-primary',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-[43px] rounded-[8px] px-5 text-[18px]',
  lg: 'h-[52px] rounded-[5px] px-8 text-[21px]',
}

export function Button({
  className = '',
  variant = 'outline',
  size = 'sm',
  type = 'button',
  children,
  disabled,
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center whitespace-nowrap font-body font-normal leading-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page',
    'disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
