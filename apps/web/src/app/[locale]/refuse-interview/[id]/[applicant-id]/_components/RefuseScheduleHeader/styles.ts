import styled from 'styled-components'

export const ScheduleHeader = styled.div``
export const Title = styled.h1`
  margin-top: 16px;
  letter-spacing: -0.24px;
  line-height: 40px;
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  word-break: keep-all;
  color: ${(props) => props.theme.colors.neutralGray800};
`
