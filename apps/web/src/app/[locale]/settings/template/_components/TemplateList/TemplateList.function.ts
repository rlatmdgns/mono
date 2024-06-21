import { IconNames } from "@repo/ui/src/components/Icon";

export const getNodataTemplateInfo: {
  (key: string):
    | {
    title: string
    icon: IconNames
  }
    | undefined
} = (key: string) => {
  switch (key) {
    case 'posting':
      return {
        title: '공고',
        icon: 'icon/recruitment-solid',
      }
    case 'mail':
      return {
        title: '메일',
        icon: 'icon/mail-solid',
      }
    case 'evaluation':
      return {
        title: '평가',
        icon: 'icon/assessment-solid',
      }
  }
}
