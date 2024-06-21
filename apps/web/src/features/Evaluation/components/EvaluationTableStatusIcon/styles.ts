import styled from 'styled-components'

export const Wrapper = styled.div<{ $bgColor: string; $status: string }>`
  padding: ${(props) => (props.$status === 'closed' ? '8px' : '3px')};
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.colors[props.$bgColor]};
  border-radius: 6px;
`
