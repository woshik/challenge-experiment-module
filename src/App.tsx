import ExperimentModule from './components/ExperimentModule'
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
        >Hello
        </ExperimentModule>
      ))}
    </div>
  )
}

export default App
