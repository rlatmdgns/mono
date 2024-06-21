import { styled } from 'styled-components'

export const InterviewHeader = styled.header`
  display: flex;
  padding: 24px 16px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-bottom: ${(props) => `1px solid ${props.theme.colors.neutralGray200}`};
`

export const Title = styled.h3`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: #374a6a;
`
