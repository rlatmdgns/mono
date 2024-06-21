import styled from 'styled-components'

export const Badge = styled.em<{ $isChecked: boolean }>`
  display: flex;
  gap: 2px;
  padding: 6px;
  max-width: 90px;
  font-style: normal;
  background-color: ${(props) =>
    props.$isChecked ? props.theme.colors.blue100 : props.theme.colors.neutralGray200};
  border-radius: 6px;
`

export const Text = styled.span<{ $isChecked: boolean }>`
  ${(props) => props.theme.fonts[11]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) =>
    props.$isChecked ? props.theme.colors.blue500 : props.theme.colors.neutralGray600};
`
