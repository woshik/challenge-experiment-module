import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { forwardRef } from 'react'

interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  VariantProps<typeof textareaVariants> {}

const textareaVariants = cva(
  'bg-background w-full outline-none p-4 rounded-lg text-primary-foreground text-md',
  {
    variants: {
      size: {
        default: 'h-14',
        md: 'h-16',
        lg: 'h-20'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, size, ...props }, ref): JSX.Element => {
    return (
      <textarea
        className={cn(textareaVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

export default Textarea
export type { ITextareaProps }
