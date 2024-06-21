import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Content = styled.div`
  ${(props) => props.theme.fonts[14]};
`

export const Title = styled.em`
  font-style: normal;
  color: ${(props) => props.theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Description = styled.p`
  color: ${(props) => props.theme.colors.neutralGray500};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
