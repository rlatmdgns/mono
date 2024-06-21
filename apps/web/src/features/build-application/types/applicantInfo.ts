import { IconNames } from "@repo/ui/src/components/Icon";

export interface ApplicantInfo {
  ko: string
  en: string
  icon: IconNames
  desc?: string
  key: string
  is_required: boolean
  is_canview: boolean
  is_note?: boolean
  is_title?: boolean
  is_multiple?: boolean

  [index: string]: string | undefined | any
}
