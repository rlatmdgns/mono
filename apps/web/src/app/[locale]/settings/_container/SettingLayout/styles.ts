import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  padding: 14px 24px;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`

export const Container = styled.div`
  display: flex;
  width: 100vw;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const Content = styled.div`
  overflow: auto;
  height: calc(100vh - 58px);
  flex: 1;
`
