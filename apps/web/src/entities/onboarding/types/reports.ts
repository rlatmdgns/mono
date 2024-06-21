export interface FreshmanReport {
  id: number
  name: string
  scenarios: ScenarioReport[]
  start_date: string
  total: number
  complete: number
  scenes: SceneReport[]
}

export interface ScenarioReport {
  id: number
  title: string
  is_edited: boolean
}

export interface SceneReport {
  id: number
  title: string
  is_edited: boolean
  date: string
  status: string
  managers: string[]
}

export interface SequencesStatus {
  total: number
  complete: number
}

export interface Reports {
  freshmen: FreshmanReport[]
}
