import { useState } from 'react'
import { Lock, Unlock } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem } from '../ui/accordion'
import { IExperimentModuleData } from '../../constants/module'
import Control from './control'
import Prompt from './prompt'
import useIterationAction from '../../hooks/useIterationAction'

interface IExperimentModule extends Omit<IExperimentModuleData, 'iterations'> {
  children?: React.ReactNode
}

const ExperimentModule = ({
  id,
  title,
  lock,
  children
}: IExperimentModule): JSX.Element => {
  const [isAddIterationModeTrue, setIsAddIterationModeTrue] = useState(false)
  const [promptValue, setPromptValue] = useState('')
  const [validationError, setValidationError] = useState(false)
  const { addIterationTitle } = useIterationAction()

  const handleControlCancelClick = (): void => {
    setIsAddIterationModeTrue(false)
    setValidationError(false)
    setPromptValue('')
  }

  const handleControlDoneClick = (): void => {
    if (promptValue === '') {
      setValidationError(true)
    } else {
      addIterationTitle(id, promptValue)
      setIsAddIterationModeTrue(false)
      setValidationError(false)
      setPromptValue('')
    }
  }

  const handleControlAddIterationClick = (): void => {
    setIsAddIterationModeTrue(true)
  }

  const handlerPromptOnChange = (value: string): void => {
    setValidationError(false)
    setPromptValue(value)
  }

  return (
    <Accordion className='bg-primary  rounded-lg'>
      <AccordionItem className='text-xl px-8 py-6 text-primary-foreground hover:text-white transition-colors'>
        <h2 className='font-bold'>{title}</h2>
        {lock ? <Lock /> : <Unlock />}
      </AccordionItem>
      <AccordionContent className='px-8'>
        <div className='space-y-2'>{children}</div>

        <Prompt
          isAddIterationModeTrue={isAddIterationModeTrue}
          onValueChange={handlerPromptOnChange}
        />

        {validationError && (
          <p className='w-full mt-5 bg-red-900 font-medium text-white rounded-lg p-4'>
            Prompt is empty. Please write to the prompt.
          </p>
        )}

        <div className='flex items-center justify-end'>
          <Control
            id={id}
            lock={lock}
            isAddIterationModeTrue={isAddIterationModeTrue}
            onCancelClick={handleControlCancelClick}
            onDoneClick={handleControlDoneClick}
            onAddIterationClick={handleControlAddIterationClick}
          />
        </div>
      </AccordionContent>
    </Accordion>
  )
}

export default ExperimentModule
