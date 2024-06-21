import styled from 'styled-components'

export const Wrapper = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
`

export const Title = styled.dt`
  ${(props) => props.theme.fonts[16]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Desc = styled.dd`
  margin: 0;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`
