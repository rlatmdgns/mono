import React from 'react'
import TestTemplate from '../../../features/TestTemplate/TestTemplate'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('버튼 컴포넌트', () => {
  it('렌더링 확인', () => {
    render(
      <TestTemplate>
        <Button text="클릭" />
      </TestTemplate>,
    )
    expect(screen.getByText('클릭')).toBeInTheDocument()
  })

  it('클릭 시 함수 호출 확인', () => {
    const onClickMock = jest.fn()
    render(
      <TestTemplate>
        <Button text="클릭" onClick={onClickMock} />
      </TestTemplate>,
    )
    fireEvent.click(screen.getByText('클릭'))
    expect(onClickMock).toHaveBeenCalled()
  })

  it('onClick prop이 없는 경우도 렌더링 확인', () => {
    const onClickMock = jest.fn()
    render(
      <TestTemplate>
        <Button text="클릭" />
      </TestTemplate>,
    )
    fireEvent.click(screen.getByText('클릭'))
    expect(onClickMock).not.toHaveBeenCalled()
  })

  it('버튼 비활성화 여부 확인', () => {
    render(
      <TestTemplate>
        <Button type="button" text="클릭" disabled />
      </TestTemplate>,
    )
    expect(screen.getByText('클릭')).toBeDisabled()
  })

  it('로딩 상태 확인', async () => {
    render(
      <TestTemplate>
        <Button text="클릭" isLoading />
      </TestTemplate>,
    )
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })
})
