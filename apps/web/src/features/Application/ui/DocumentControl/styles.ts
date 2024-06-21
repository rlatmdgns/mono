import styled from 'styled-components'

export const Option = styled.li`
  padding: 22px 12px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const Name = styled.span`
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Mark = styled(Name)`
  color: ${(props) => props.theme.colors.red500};
`

export const SwitchWrapper = styled.div<{
  $disabled?: boolean
}>`
  opacity: ${(props) => props.$disabled && '0.5'};
`
