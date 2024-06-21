import styled from 'styled-components'

export const Wrapper = styled.div``

export const Item = styled.div`
  &:not(:first-of-type) {
    margin-top: 28px;
  }
`

export const Note = styled.p`
  margin: -4px 0 12px 0;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray600};
`
