interface IIterationData {
  [key: number]: {
    title: string
    variant: string
    mode?: boolean
  }
}

interface IExperimentModuleData {
  [key: number]: {
    title: string
    lock: boolean
    iterations: IIterationData
  }
}

const moduleData: IExperimentModuleData = {
  1: {
    title: 'Experiment Module',
    lock: false,
    iterations: {
      1: {
        title: 'Iteration Title',
        variant: ''
      }
    }
  },
  2: {
    title: 'Experiment Module',
    lock: true,
    iterations: {
      1: {
        title: 'Iteration Title',
        variant: ''
      },
      2: {
        title: 'Iteration Title',
        variant: ''
      }
    }
  }
}

export default moduleData
export type {
  IIterationData,
  IExperimentModuleData
}
