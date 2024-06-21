import { colorType, IconNames } from "@repo/ui/src/components/Icon";

export interface PresetProperties {
  color: colorType
  backgroundColor: string
  boxShadow?: string
  borderColor?: string
}

export interface StylePresets {
  [key: string]: PresetProperties
}

export interface TriggerItem {
  title: string
  icon?: IconNames
  value?: string
}

export type TriggerStates = 'primary' | 'standard' | 'border'
