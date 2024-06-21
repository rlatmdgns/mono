import styled from 'styled-components'

export const Wrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`

export const Content = styled.div`
  padding: 24px 16px;
`

export const List = styled.div``

export const Item = styled.div`
  padding: 24px 16px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  }
`

export const Text = styled.p`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[16]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};

  em {
    margin-left: 4px;
  }
`

export const Detail = styled.p`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-top: 8px;
`

export const Description = styled.p`
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  white-space: pre-wrap;
  margin-top: 8px;
`

export const Disabled = styled(Text)`
  color: ${(props) => props.theme.colors.neutralGray500};
`
