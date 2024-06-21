import { render, screen } from '@testing-library/react'
import TestTemplate from '../../../features/TestTemplate/TestTemplate'
import { Empty } from './index'

const context = describe

context('항목이 존재하지 않을 때', () => {
  describe('Empty 컴포넌트가 렌더되어야 한다.', () => {
    it('props로 받는 타이틀이 올바르게 나타난다.', () => {
      const title = '목록이 없습니다.'
      render(
        <TestTemplate>
          <Empty title={title} />
        </TestTemplate>,
      )

      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })
})
