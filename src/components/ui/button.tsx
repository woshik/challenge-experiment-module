import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap 
    text-primary-foreground rounded-lg text-md px-4 bg-transparent 
    outline-none font-bold transition-colors shadow-sm disabled:pointer-events-none 
    disabled:opacity-50`,
  {
    variants: {
      variant: {
        default:
          'border border-primary-foreground hover:border-white hover:text-white',
        ghost: 'border-none hover:text-white',
        selected: 'border border-selection text-selection'
      },
      size: {
        default: 'h-12',
        lg: 'h-16'
      }
    },
    defaultVariants: {
      size: 'default',
      variant: 'default'
    }
  }
)

const Button = ({
  className,
  variant,
  size,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button }
