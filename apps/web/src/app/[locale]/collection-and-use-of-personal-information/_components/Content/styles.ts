import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 16px 80px;
  overflow-y: auto;
`

export const Title = styled.h1`
  ${(props) => props.theme.fonts[24]};
  color: ${(props) => props.theme.colors.neutralGray800};
  padding-top: 120px;
`

export const Content = styled.div`
  margin-top: 60px;
`

export const Item = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
`

export const ItemTitle = styled.dt`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const ItemDescription = styled.dd`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray700};
`

export const Notice = styled(ItemDescription)`
  margin: 0;
`
