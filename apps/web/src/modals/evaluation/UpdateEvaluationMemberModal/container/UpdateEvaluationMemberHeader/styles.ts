import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`

export const CountBox = styled.div`
  color: ${(props) => props.theme.colors.neutralGray400};
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

export const SelectCount = styled.span`
  color: ${(props) => props.theme.colors.blue500};
`

export const Description = styled.p`
  color: ${(props) => props.theme.colors.neutralGray400};
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-top: 8px;
`
