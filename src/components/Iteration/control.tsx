import { Button } from '../../components/ui/button'
import useIterationAction from '../../hooks/useIterationAction'

interface IControlProps {
  id: number
  moduleId: number
  onRemoveClick?: () => void
  onDoneClick?: () => void
}

const Control = ({
  id,
  moduleId,
  onRemoveClick,
  onDoneClick
}: IControlProps): JSX.Element => {
  const { removeIteration } = useIterationAction()

  const handlerRemoveClick = (): void => {
    removeIteration(id, moduleId)

    if (onRemoveClick != null) {
      onRemoveClick()
    }
  }

  const handlerDoneClick = (): void => {
    if (onDoneClick != null) {
      onDoneClick()
    }
  }

  return (
    <>
      <Button variant='ghost' size='lg' onClick={handlerRemoveClick}>
        REMOVE
      </Button>
      <Button variant='ghost' size='lg' onClick={handlerDoneClick}>
        DONE
      </Button>
    </>
  )
}

export default Control
