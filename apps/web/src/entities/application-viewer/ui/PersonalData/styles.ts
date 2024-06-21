import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 16px;
`

export const Content = styled.div`
  width: calc(100% - 158px);
`

export const Name = styled.p`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[22]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: 28px;
`

export const List = styled.dl`
  margin: 0;

  > div {
    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }
`

export const Item = styled.div`
  display: flex;
  gap: 4px;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

export const ItemLabel = styled.dt`
  width: 96px;
  color: ${(props) => props.theme.colors.neutralGray400};
  flex-shrink: 0;
`

export const ItemValue = styled.dd`
  color: ${(props) => props.theme.colors.neutralGray800};
  word-break: break-all;
`
