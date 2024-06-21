import styled from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 12px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.neutralGray50};
  border-radius: 6px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
`

export const Text = styled.span`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const LinkText = styled(Link)`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-decoration: underline;
`
