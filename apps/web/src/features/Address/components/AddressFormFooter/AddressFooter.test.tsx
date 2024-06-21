import React from 'react'
import { render, screen } from '@testing-library/react'
import AddressFormFooter from './AddressFormFooter'
import TestTemplate from '../../../TestTemplate/TestTemplate'

const context = describe

// given
const addressType = 'form'
const handleSetAddress = jest.fn()
const onClose = jest.fn()
const saveAddress = jest.fn()

describe('주소를 저장하기 위한 버튼이 있다.', () => {
  context('주소의 타입이 form일 때에는', () => {
    it('버튼의 이름이 "저장"이다.', () => {
      const address = ''
      const detailAddress = ''
      // when
      render(
        <TestTemplate>
          <AddressFormFooter
            addressType={addressType}
            address={address}
            detailAddress={detailAddress}
            handleSetAddress={handleSetAddress}
            onClose={onClose}
          />
        </TestTemplate>,
      )

      const button = screen.getByText('저장')
      // then
      expect(button).toBeTruthy()
    })
  })
})

describe('주소를 저장하기 위한 버튼이 있다.', () => {
  context('주소의 값이 없을 때에는', () => {
    it('버튼은 disabled 상태가 된다.', () => {
      const address = ''
      const detailAddress = ''
      // when
      render(
        <TestTemplate>
          <AddressFormFooter
            addressType={addressType}
            address={address}
            detailAddress={detailAddress}
            handleSetAddress={handleSetAddress}
            onClose={onClose}
          />
        </TestTemplate>,
      )
      const button = screen.getByText('저장').closest('button')
      // then
      if (!address) {
        expect(button).toBeDisabled()
      }
    })
  })
})

describe('주소를 저장하기 위한 버튼이 있다.', () => {
  context('주소의 값이 있을 때에는', () => {
    it('버튼은 disabled 상태가 해제된다.', () => {
      const address = '서울특별시 강남구'
      const detailAddress = ''
      // when
      render(
        <TestTemplate>
          <AddressFormFooter
            addressType={addressType}
            address={address}
            detailAddress={detailAddress}
            handleSetAddress={handleSetAddress}
            onClose={onClose}
          />
        </TestTemplate>,
      )

      const button = screen.getByText('저장').closest('button')
      // then
      if (address) {
        expect(button).toBeEnabled()
      }
    })
  })
})
