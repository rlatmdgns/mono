import styled from 'styled-components'

export const Option = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 12px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
`

export const Content = styled.dl`
  margin: 0;
`

export const Name = styled.dt`
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Desc = styled.dd`
  margin: 4px 0 0;
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`
export const SwitchWrapper = styled.div<{
  $disabled?: boolean
}>`
  opacity: ${(props) => props.$disabled && '0.5'};
`
