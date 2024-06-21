import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

export const Title = styled.h2`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const Step = styled.span`
  color: ${(props) => props.theme.colors.neutralGray400};
`

export const EvaluationTable = styled.span`
  color: ${(props) => props.theme.colors.neutralGray800};
`
