import { getConvertAppendModalDday, getConvertUpdateModalDday } from './index'

const context = describe

describe('dDay 체크', () => {
  context('날짜가 0 일때,', () => {
    it('D-day가 0을 반환한다.', () => {
      const result = getConvertAppendModalDday({ join_date: 0 })
      expect(result).toBe(0)
    })
  })

  context('전/후 선택이 전일때', () => {
    it('D-day가 음수를 반환한다.', () => {
      const result = getConvertAppendModalDday({ join_date: 1, date_type: 'before' })
      expect(result).toBeLessThan(0)
    })
  })

  context('전/후 선택이 후일때', () => {
    it('D-day가 양수를 반환한다.', () => {
      const result = getConvertAppendModalDday({ join_date: 1 })
      expect(result).toBeGreaterThan(0)
    })
  })
})

describe('시퀀스 일정에서의 D-Day체크', () => {
  context('입사일이 정해져있을 때, 입사일과 설정된 날짜의 차이를 반환한다.', () => {
    const originalJoinDate = '2024-05-20'
    it('입사일과 변경하고자 하는 날짜의 차이는 10일이다.', () => {
      const updateDate = '2024-05-30'
      const result = getConvertUpdateModalDday(updateDate, originalJoinDate)
      expect(result).toEqual(10)
    })
  })
})

describe('권한이 전체인지 체크한다.', () => {
  const getIsAuthorityAll = (authority: string) => {
    if (authority !== 'all') return false
    return true
  }

  context('권한이 전체로 설정되었다.', () => {
    it('권한이 전체로 확인된다.', () => {
      const result = getIsAuthorityAll('all')
      expect(result).toBeTruthy()
    })
  })

  context('권한이 온보딩 담당자이다.', () => {
    it('권한이 전체가 아니다.', () => {
      const result = getIsAuthorityAll('manager')
      expect(result).toBeFalsy()
    })
  })

  context('권한이 신규 입사자다.', () => {
    it('권한이 전체가 아니다.', () => {
      const result = getIsAuthorityAll('freshman')
      expect(result).toBeFalsy()
    })
  })
})
