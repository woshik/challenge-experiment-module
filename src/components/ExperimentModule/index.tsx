import { useState } from 'react'
import { Lock, Unlock } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem } from '../ui/accordion'
import { IExperimentModuleData } from '../../constants/module'
import Control from './control'
import Prompt from './prompt'

interface IExperimentModule extends Omit<IExperimentModuleData, 'iterations'> {
  children: React.ReactNode
}

const ExperimentModule = ({
  id,
  title,
  lock,
  children
}: IExperimentModule): JSX.Element => {
  const [isAddIterationModeTrue, setIsAddIterationModeTrue] = useState(false)

  const handleCancelClick = (): void => {
    setIsAddIterationModeTrue(false)
  }

  const handleDoneClick = (): void => {
    setIsAddIterationModeTrue(false)
  }

  const handleAddIterationClick = (): void => {
    setIsAddIterationModeTrue(true)
  }

  return (
    <Accordion className='bg-primary  rounded-lg'>
      <AccordionItem className='text-xl px-8 py-6 text-primary-foreground hover:text-white transition-colors'>
        <h2 className='font-bold'>{title}</h2>
        {lock ? <Lock /> : <Unlock />}
      </AccordionItem>
      <AccordionContent className='px-8'>
        <div className='space-y-2'>{children}</div>
        <Prompt isAddIterationModeTrue={isAddIterationModeTrue} />
        <div className='flex items-center justify-end'>
          <Control
            id={id}
            lock={lock}
            isAddIterationModeTrue={isAddIterationModeTrue}
            onCancelClick={handleCancelClick}
            onDoneClick={handleDoneClick}
            onAddIterationClick={handleAddIterationClick}
          />
        </div>
      </AccordionContent>
    </Accordion>
  )
}

export default ExperimentModule
