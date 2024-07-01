import { createContext, useContext, useState } from 'react'
import type { IExperimentModuleData } from '../constants/module'
import moduleData from '../constants/module'

interface IContext {
  experimentModules: IExperimentModuleData[]
  setExperimentModules: React.Dispatch<React.SetStateAction<IExperimentModuleData[]>>
}

interface ExperimentModuleProviderProps {
  children: React.ReactNode
}

const ExperimentModuleContext = createContext<IContext | null>(null)

const ExperimentModuleProvider = ({
  children
}: ExperimentModuleProviderProps): JSX.Element => {
  const [experimentModules, setExperimentModules] = useState(moduleData)

  return (
    <ExperimentModuleContext.Provider
      value={{
        experimentModules,
        setExperimentModules
      }}
    >
      {children}
    </ExperimentModuleContext.Provider>
  )
}

const useExperimentModuleContext = (): IContext => {
  const { experimentModules, setExperimentModules } = useContext(
    ExperimentModuleContext
  ) as IContext

  return {
    experimentModules,
    setExperimentModules
  }
}

export { ExperimentModuleProvider, useExperimentModuleContext }
