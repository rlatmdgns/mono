import styled from 'styled-components'
import Link from 'next/link'

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

export const AgreementBox = styled.div`
  width: 100%;
  padding: 12px 0 16px 0;
  background-color: ${(props) => props.theme.colors.neutralGray50};
  border-radius: 6px;
`

export const Label = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  margin: 0 12px;

  &:first-of-type {
    padding-bottom: 12px;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${(props) => props.theme.colors.neutralGray200};
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
`

export const AgreementText = styled.span`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const AgreementLink = styled(Link)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-decoration: underline;
`
