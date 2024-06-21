import styled from 'styled-components'

export const Item = styled.div`
  & + & {
    margin-top: 24px;
  }
`

export const Title = styled.em`
  display: block;
  font-style: normal;
  color: ${(props) => props.theme.colors.neturalGray800};
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  margin-bottom: 12px;
`
export const UploadText = styled.p`
  margin-top: 6px;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.red500};
`
