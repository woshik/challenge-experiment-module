import { Button } from '../ui/button'
import { IIterationData } from '../../constants/module'
import iterationVariant from '../../constants/iteration-variant'
import useIterationAction from '../../hooks/useIterationAction'

interface IIterationVariantProps extends Pick<IIterationData, 'variant' | 'id'> {
  moduleId: number
}

const Variant = ({ id, moduleId, variant }: IIterationVariantProps): JSX.Element => {
  const { selectVariant } = useIterationAction()

  return (
    <>
      {iterationVariant.map((iteration) => (
        <Button
          key={iteration.value}
          variant={variant === iteration.value ? 'selected' : 'default'}
          onClick={() => selectVariant(id, moduleId, iteration.value)}
        >
          {iteration.label}
        </Button>
      ))}
    </>
  )
}

export default Variant
