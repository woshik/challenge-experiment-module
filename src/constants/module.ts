interface IIterationData {
  id: number
  title: string
  variant: string
  mode?: boolean
}

interface IExperimentModuleData {
  id: number
  title: string
  lock: boolean
  iterations: IIterationData[]
}

const moduleData: IExperimentModuleData[] = [
  {
    id: 1,
    title: 'Experiment Module',
    lock: false,
    iterations: [
      {
        id: 1,
        title: 'Iteration Title',
        variant: 'large'
      }
    ]
  },
  {
    id: 2,
    title: 'Experiment Module',
    lock: true,
    iterations: [
      {
        id: 1,
        title: 'Iteration Title',
        variant: 'short'
      },
      {
        id: 2,
        title: 'Iteration Title',
        variant: ''
      }
    ]
  }
]

export default moduleData
export type { IIterationData, IExperimentModuleData }
