import { SequenceInterface } from '../../../entities/onboarding/types'

const context = describe

const findHasSequence = (fields: SequenceInterface[], d_day: number) => {
  return fields.some((field: SequenceInterface) => field.d_day === d_day && field.isAppend)
}

const getSequenceCheckWithAuthority = (isSequenceWithAuthority: boolean) => {
  if (isSequenceWithAuthority) {
    return {
      text: `설정된 일정에 시퀀스가 존재합니다.`,
      status: false,
    }
  }

  return {
    text: '시퀀스가 추가되었습니다.',
    status: true,
  }
}

describe('시퀀스 권한 : 이미 활성화된 시퀀스가 있는지 확인 : findHasSequence', () => {
  context('추가할 수 있는 시퀀스를 체크 합니다.', () => {
    it('D-day가 0일 일때, 이미 존재하는 온보딩 매니저 시퀀스가 있다.', () => {
      const testFiled: any = {
        manager: [
          {
            d_day: 0,
            scenes: [],
            isAppend: true,
          },
        ],
        freshman: [],
      }
      const d_day = 0
      const isContainField = findHasSequence(testFiled.manager, d_day)
      expect(isContainField).toBeTruthy()
    })

    it('D-day가 3일 일때,이미 존재하는 온보딩 매니저 시퀀스가 없다.', () => {
      const testFiled: any = {
        manager: [
          {
            d_day: 0,
            scenes: [],
            isAppend: true,
          },
        ],
        freshman: [],
      }
      const d_day = 3
      const isContainField = findHasSequence(testFiled.manager, d_day)
      expect(isContainField).toBeFalsy()
    })
  })
})

describe('시퀀스 추가 : 이미 추가된 시퀀스가 존재할 때, 오류 메세지 반환', () => {
  context('추가할 수 있는 시퀀스를 체크 합니다.', () => {
    const testFiled: any = {
      manager: [
        {
          d_day: 0,
          scenes: [],
          isAppend: true,
        },
      ],
      freshman: [],
    }

    it('D-day가 0인 매니저 시퀀스가 이미 존재한다. ', () => {
      const isSequenceWithAuthority = findHasSequence(testFiled.manager, 0)

      expect(getSequenceCheckWithAuthority(isSequenceWithAuthority).status).toBeFalsy()
    })
    it('D-day가 0인 신규 입사자 시퀀스가 이미 존재하지 않는다. ', () => {
      const isSequenceWithAuthority = findHasSequence(testFiled.freshman, 0)
      expect(getSequenceCheckWithAuthority(isSequenceWithAuthority).status).toBeTruthy()
    })
  })
})
