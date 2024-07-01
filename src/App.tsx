import ExperimentModule from './components/ExperimentModule'
import Iteration from './components/Iteration'
import { useExperimentModuleContext } from './context/experimentModule'

const App = (): JSX.Element => {
  const { experimentModules } = useExperimentModuleContext()

  return (
    <div className='w-[580px] mx-auto space-y-5 p-5'>
      {experimentModules.map((module) => (
        <ExperimentModule
          key={module.id}
          id={module.id}
          title={module.title}
          lock={module.lock}
        >
          {module.iterations.map((iteration) => (
            <Iteration
              key={iteration.id}
              moduleId={module.id}
              id={iteration.id}
              title={iteration.title}
              variant={iteration.variant}
              mode={iteration.mode}
            />
          ))}
        </ExperimentModule>
      ))}
    </div>
  )
}

export default App
