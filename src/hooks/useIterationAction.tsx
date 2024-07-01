import { useExperimentModuleContext } from '../context/experimentModule'

interface IIterationActionReturn {
  addIteration: (id: number) => void
  removeIteration: (id: number, moduleId: number) => void
  removeLastIteration: (moduleId: number) => void
  addIterationTitle: (moduleId: number, title: string) => void
  selectVariant: (id: number, moduleId: number, variant: string) => void
}

const useIterationAction = (): IIterationActionReturn => {
  const { experimentModules, setExperimentModules } =
    useExperimentModuleContext()

  const addIteration = (id: number): void => {
    const newExperiments = experimentModules.map((ex) => {
      if (ex.id === id) {
        const id = ex?.iterations[ex?.iterations?.length - 1]?.id ?? 0

        ex.iterations.push({
          id: id + 1,
          variant: '',
          title: ''
        })
      }
      return ex
    })
    setExperimentModules(newExperiments)
  }

  const removeIteration = (id: number, moduleId: number): void => {
    const newExperiments = experimentModules.map((ex) => {
      if (ex.id === moduleId) {
        ex.iterations = ex.iterations.filter((it) => it.id !== id)
      }
      return ex
    })

    setExperimentModules(newExperiments)
  }

  const removeLastIteration = (moduleId: number): void => {
    const newExperiments = experimentModules.map((ex) => {
      if (ex.id === moduleId) {
        ex.iterations.pop()
      }

      return ex
    })

    setExperimentModules(newExperiments)
  }

  const addIterationTitle = (moduleId: number, title: string): void => {
    const newExperiments = experimentModules.map((ex) => {
      if (ex.id === moduleId) {
        ex.iterations[ex.iterations.length - 1].title = title
      }

      return ex
    })

    setExperimentModules(newExperiments)
  }

  const selectVariant = (
    id: number,
    moduleId: number,
    variant: string
  ): void => {
    const newExperiments = experimentModules.map((ex) => {
      if (ex.id === moduleId) {
        ex.iterations = ex.iterations.map((it) => {
          if (it.id === id) {
            it.variant = variant
          }

          return it
        })
      }
      return ex
    })

    setExperimentModules(newExperiments)
  }
  return {
    addIteration,
    removeIteration,
    removeLastIteration,
    addIterationTitle,
    selectVariant
  }
}

export default useIterationAction
