import styled from 'styled-components'

export const AlarmList = styled.ul<{ $wrapperWidth?: string }>`
  display: flex;
  width: ${(props) => props.$wrapperWidth};
  max-height: 400px;
  overflow-y: scroll;
  flex-wrap: wrap;
  border-radius: 0 0 11px 11px;
  background: ${(props) => props.theme.colors.white};
`

export const NoList = styled(AlarmList)`
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.neutralGray400};
  padding: 20px;
  justify-content: center;
  overflow: visible;
`
