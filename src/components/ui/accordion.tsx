import { createContext, useContext, useEffect, useState } from 'react'
import { cn } from '../../lib/utils'

interface IAccordionContext {
  expand: boolean
  setExpand: React.Dispatch<React.SetStateAction<boolean>>
  onChange?: (expand: boolean) => void
  expanded?: boolean
}

interface DefaultProps {
  children: React.ReactNode
  className?: string
}

interface IAccordionProps extends DefaultProps {
  onChange?: (expand: boolean) => void
  expanded?: boolean
}

interface IAccordionItemProps extends DefaultProps {}

interface IAccordionContentProps extends DefaultProps {}

const AccordionContext = createContext<IAccordionContext | null>(null)

const useAccordionContext = (): IAccordionContext => {
  const { expand, setExpand, onChange, expanded } = useContext(
    AccordionContext
  ) as IAccordionContext

  return { expand, setExpand, onChange, expanded }
}

const Accordion = ({
  children,
  className,
  expanded,
  onChange
}: IAccordionProps): JSX.Element => {
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    if (typeof expanded === 'boolean') {
      setExpand(expanded)
    }
  }, [expanded])

  return (
    <div className={cn('w-full', className)}>
      <AccordionContext.Provider
        value={{ expand, setExpand, expanded, onChange }}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  )
}

const AccordionItem = ({
  children,
  className
}: IAccordionItemProps): JSX.Element => {
  const { expand, setExpand, onChange } = useAccordionContext()

  const handlerAccordionItemClick = (): void => {
    setExpand(!expand)

    if (onChange != null) {
      onChange(!expand)
    }
  }

  return (
    <div
      className={cn(
        'flex justify-between items-center cursor-pointer',
        className
      )}
      onClick={handlerAccordionItemClick}
    >
      {children}
    </div>
  )
}

const AccordionContent = ({
  children,
  className
}: IAccordionContentProps): JSX.Element => {
  const { expand } = useAccordionContext()

  return (
    <div
      className={cn(
        'grid grid-rows-[0fr] grid-cols-1 transition-all duration-500',
        expand && 'grid-rows-[1fr]'
      )}
    >
      <div className={cn('overflow-hidden', className)}>{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionContent }
