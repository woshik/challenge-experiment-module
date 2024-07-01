import { IExperimentModuleData } from '../../constants/module'
import { useExperimentModuleAction } from '../../hooks/useExperimentModuleAction'
import useIterationAction from '../../hooks/useIterationAction'
import { Button } from '../ui/button'

interface IControl extends Pick<IExperimentModuleData, 'id' | 'lock'> {
  isAddIterationModeTrue: boolean
  onUnlockClick?: () => void
  onCancelClick?: () => void
  onDoneClick?: () => void
  onLockClick?: () => void
  onResetClick?: () => void
  onRemoveClick?: () => void
  onAddIterationClick?: () => void
}

const LockState = ({
  id,
  onUnlockClick
}: Pick<IControl, 'id' | 'onUnlockClick'>): JSX.Element => {
  const { lockUnlockModule } = useExperimentModuleAction()

  const handlerUnlockClick = (): void => {
    lockUnlockModule(id)

    if (onUnlockClick != null) {
      onUnlockClick()
    }
  }

  return (
    <Button variant='ghost' size='lg' onClick={handlerUnlockClick}>
      UNLOCK
    </Button>
  )
}

const AddIterationState = ({
  id,
  onCancelClick,
  onDoneClick
}: Pick<IControl, 'id' | 'onCancelClick' | 'onDoneClick'>): JSX.Element => {
  const { removeLastIteration } = useIterationAction()

  const handleCancelClick = (): void => {
    removeLastIteration(id)

    if (onCancelClick != null) {
      onCancelClick()
    }
  }

  const handleDoneClick = (): void => {
    if (onDoneClick != null) {
      onDoneClick()
    }
  }

  return (
    <>
      <Button variant='ghost' size='lg' onClick={handleCancelClick}>
        CANCEL
      </Button>
      <Button variant='ghost' size='lg' onClick={handleDoneClick}>
        DONE
      </Button>
    </>
  )
}

const DefaultState = ({
  id,
  onLockClick,
  onResetClick,
  onAddIterationClick,
  onRemoveClick
}: Pick<
IControl,
| 'id'
| 'onLockClick'
| 'onResetClick'
| 'onAddIterationClick'
| 'onRemoveClick'
>): JSX.Element => {
  const { lockUnlockModule, resetModule, removeModule } =
    useExperimentModuleAction()
  const { addIteration } = useIterationAction()

  const handlerLockClick = (): void => {
    lockUnlockModule(id)

    if (onLockClick != null) {
      onLockClick()
    }
  }

  const handlerResetClick = (): void => {
    resetModule(id)

    if (onResetClick != null) {
      onResetClick()
    }
  }

  const handlerAddIterationClick = (): void => {
    addIteration(id)

    if (onAddIterationClick != null) {
      onAddIterationClick()
    }
  }

  const handlerRemoveClick = (): void => {
    removeModule(id)

    if (onRemoveClick != null) {
      onRemoveClick()
    }
  }

  return (
    <>
      <Button variant='ghost' size='lg' onClick={handlerLockClick}>
        LOCK
      </Button>
      <Button variant='ghost' size='lg' onClick={handlerResetClick}>
        RESET
      </Button>
      <Button variant='ghost' size='lg' onClick={handlerAddIterationClick}>
        + ADD ITERATION
      </Button>
      <Button variant='ghost' size='lg' onClick={handlerRemoveClick}>
        REMOVE
      </Button>
    </>
  )
}

const Control = ({
  id,
  lock,
  isAddIterationModeTrue,
  onUnlockClick,
  onCancelClick,
  onDoneClick,
  onLockClick,
  onResetClick,
  onRemoveClick,
  onAddIterationClick
}: IControl): JSX.Element => {
  if (isAddIterationModeTrue) {
    return (
      <AddIterationState
        id={id}
        onCancelClick={onCancelClick}
        onDoneClick={onDoneClick}
      />
    )
  }

  if (lock) {
    return <LockState id={id} onUnlockClick={onUnlockClick} />
  }

  return (
    <DefaultState
      id={id}
      onLockClick={onLockClick}
      onResetClick={onResetClick}
      onRemoveClick={onRemoveClick}
      onAddIterationClick={onAddIterationClick}
    />
  )
}

export default Control
