import { colorType, IconNames } from "@repo/ui/src/components/Icon";

interface ScheduleHeaderInformationType {
  [key: string]: {
    icon?: IconNames
    iconColor?: colorType
    text: string
    buttonText?: string
  }
}

export const ScheduleHeaderInformation: ScheduleHeaderInformationType = {
  LOADING: {
    icon: undefined,
    iconColor: undefined,
    text: '',
  },
  SELECT: {
    icon: 'icon/interview-solid',
    iconColor: 'blue500',
    text: '원하는 면접 시간을 선택해 주세요',
    buttonText: '기업에 면접 시간 보내기',
  },
  EXPIRE: {
    icon: 'icon/warning-solid',
    iconColor: 'orange500',
    text: '면접 일정을 이미 선택했거나 \n' + '만료된 페이지입니다.',
  },
  COMPLETE: {
    icon: 'icon/check-solid',
    iconColor: 'blue500',
    text: '면접 일정이 확정되었습니다.',
  },
}
