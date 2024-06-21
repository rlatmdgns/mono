import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const TextContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  min-height: 16px;
`

export const Text = styled.span`
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const RequiredMark = styled.span`
  margin-top: 3px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.red500};
`
