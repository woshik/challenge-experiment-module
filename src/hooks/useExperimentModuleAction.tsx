import { useExperimentModuleContext } from '../context/experimentModule'

interface IActionReturn {
  addModule: () => void
  removeModule: (id: number) => void
  lockUnlockModule: (id: number) => void
  resetModule: (id: number) => void
}

export const useExperimentModuleAction = (): IActionReturn => {
  const { experimentModules, setExperimentModules } =
    useExperimentModuleContext()

  const addModule = (): void => {
    const id = experimentModules?.[experimentModules?.length - 1]?.id ?? 0

    setExperimentModules([
      ...experimentModules,
      {
        id: id + 1,
        title: 'Experiment Module',
        lock: false,
        iterations: []
      }
    ])
  }

  const removeModule = (id: number): void => {
    const newExperiments = experimentModules.filter((ex) => ex.id !== id)
    setExperimentModules(newExperiments)
  }

  const lockUnlockModule = (id: number): void => {
    const newExperiments = experimentModules.map((ex) => {
      if (ex.id === id) {
        ex.lock = !ex.lock
      }

      return ex
    })
    setExperimentModules(newExperiments)
  }

  const resetModule = (id: number): void => {
    const newExperiments = experimentModules.map((ex) => {
      if (ex.id === id) {
        ex.iterations = []
      }
      return ex
    })
    setExperimentModules(newExperiments)
  }

  return { addModule, removeModule, lockUnlockModule, resetModule }
}
