import { useEffect, useRef, useState } from 'react'
import Textarea from '../ui/textarea'

interface IPromptProps {
  isAddIterationModeTrue: boolean
  onValueChange?: (value: string) => void
}

const Prompt = ({
  isAddIterationModeTrue,
  onValueChange
}: IPromptProps): JSX.Element | null => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [textareaVisible, setTextareaVisible] = useState(false)

  useEffect(() => {
    if (!isAddIterationModeTrue) {
      setTextareaVisible(false)
    }
  }, [isAddIterationModeTrue])

  const handlePromptClick = (): void => {
    setTextareaVisible(true)
    setTimeout(() => {
      textAreaRef.current?.focus()
    })
  }

  const handleAutoGenerateText = (): void => {
    setTimeout(() => {
      if (textAreaRef.current !== null) {
        textAreaRef.current.value = 'Iteration Title'

        if (onValueChange != null) {
          onValueChange(textAreaRef.current.value)
        }
      }
    })
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (onValueChange != null) {
      onValueChange(e.target.value)
    }
  }

  if (isAddIterationModeTrue && textareaVisible) {
    return (
      <Textarea
        size='lg'
        className='mt-10'
        ref={textAreaRef}
        onChange={(e) => handleOnChange(e)}
      />
    )
  }

  if (isAddIterationModeTrue) {
    return (
      <p
        className='bg-background h-20 w-full mt-10 text-md text-primary-foreground p-4 rounded-md cursor-text'
        onClick={handlePromptClick}
      >
        To add a new iteration, start typing the prompt or{' '}
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
