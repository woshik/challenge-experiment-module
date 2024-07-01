import { useRef, useState } from 'react'
import Textarea from '../ui/textarea'

interface IPromptProps {
  isAddIterationModeTrue: boolean
}

const Prompt = ({ isAddIterationModeTrue }: IPromptProps): JSX.Element | null => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [textareaVisible, setTextareaVisible] = useState(false)

  const handlePromptClick = (): void => {
    setTextareaVisible(true)
    setTimeout(() => {
      textAreaRef.current?.focus()
    }, 100)
  }

  const handleAutoGenerateText = (): void => {
    if (textAreaRef.current?.value !== undefined) {
      textAreaRef.current.value = 'Iteration Title'
    }
  }

  if (textareaVisible) {
    return <Textarea size='lg' ref={textAreaRef} />
  }

  if (isAddIterationModeTrue) {
    return (
      <p
        className='bg-background h-20 w-full mt-10 text-md text-primary-foreground p-4 rounded-md cursor-text'
        onClick={handlePromptClick}
      >
        To add a new iteration, start typing a prompt or{' '}
        <span
          className='underline cursor-pointer'
          onClick={handleAutoGenerateText}
        >
          generate
        </span>{' '}
        one.
      </p>
    )
  }

  return null
}

export default Prompt
