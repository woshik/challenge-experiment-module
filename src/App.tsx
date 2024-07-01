import ExperimentModule from './components/ExperimentModule'
import Iteration from './components/Iteration'
import { Button } from './components/ui/button'
import { useExperimentModuleContext } from './context/experimentModule'
import { useExperimentModuleAction } from './hooks/useExperimentModuleAction'

const App = (): JSX.Element => {
  const { experimentModules } = useExperimentModuleContext()
  const { addModule } = useExperimentModuleAction()

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
      <Button className='w-full' onClick={addModule}>Add Module</Button>
    </div>
  )
}

export default App
