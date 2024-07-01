import { useState } from 'react'
import { IIterationData } from '../../constants/module'
import { Accordion, AccordionContent, AccordionItem } from '../ui/accordion'
import Control from './control'
import Variant from './variant'

interface IIterationProps extends IIterationData {
  moduleId: number
}

const Iteration = ({
  id,
  title,
  moduleId,
  variant
}: IIterationProps): JSX.Element => {
  const [expand, setExpand] = useState(false)

  const handleAccordionChange = (expand: boolean): void => {
    setExpand(expand)
  }

  const handleControlDoneClick = (): void => {
    setExpand(false)
  }

  const isViewMode = title !== ''
  const hasVariant = variant !== ''

  return (
    <Accordion
      className='bg-background first:rounded-t-md last:rounded-b-md'
      expanded={expand}
      onChange={handleAccordionChange}
    >
      <AccordionItem className='grid grid-cols-[min-content_1fr] text-primary-foreground transition-colors hover:text-white p-4'>
        <div className='flex justify-between items-center whitespace-nowrap pl-4 mr-8'>
          EM-{id}
        </div>

        <div className='flex justify-between items-center'>
          {isViewMode ? <h3>{title}</h3> : <h3>Adding iteration...</h3>}

          {!expand && isViewMode && hasVariant && (
            <div className='flex justify-between items-center'>
              <span className='mr-2'>Selection</span>
              <span className='w-2 h-2 rounded-full bg-selection inline-block' />
            </div>
          )}
        </div>
      </AccordionItem>

      {isViewMode && (
        <AccordionContent className='col-start-2 pl-24 pr-4'>
          <div className='flex flex-wrap py-4 gap-4 border-b border-white/20'>
            <Variant id={id} moduleId={moduleId} variant={variant} />
          </div>
          <div className='flex items-center justify-end'>
            <Control
              id={id}
              moduleId={moduleId}
              onDoneClick={handleControlDoneClick}
            />
          </div>
        </AccordionContent>
      )}
    </Accordion>
  )
}

export default Iteration
