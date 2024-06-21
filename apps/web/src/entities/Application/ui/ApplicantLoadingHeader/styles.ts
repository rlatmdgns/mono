import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
`

export const Back = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const ButtonSkeleton = styled.div`
  ${(props) => props.theme.fonts[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
