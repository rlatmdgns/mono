export interface SequenceInterface {
  d_day: number
  scenes: Scene[]
  isAppend: boolean
}

export interface Scene {
  type: 'alarm' | 'contents' | 'survey' | 'evaluation'
  title: string
  contents: string
}

export interface Scenario {
  title: string
  description: string
  sequences: SequenceInterface[]
}

export interface ScenarioRequest {
  title: string
  scenario: Scenario
}

export interface ScenarioResponse {
  name: string
  start_date: string
  scenario: Scenario
}

export interface ScenarioItem {
  id: number
  title: string
  description: string
  number: number
}

export interface SceneMemberItem {
  id: number
  type: 'ATS' | 'OMS'
  name: string
  email: string
  profile: string
}

export interface TemplateScenarioTitle {
  title: string
  description: string
}

export interface TemplateScenario {
  id: number
  title: string
  description: string
}

export interface TemplateScenarioWithId extends TemplateScenario {
  is_deleted: boolean
  manager: Sequence[]
  freshman: Sequence[]
}

interface Sequence {
  id: number
  scenario_id: number
  type: 'manager' | 'freshman'
  d_day: number
  sequence_data: any
}

// TODO sequenceData 인터페이스 정의 필요
interface SequenceData {}
