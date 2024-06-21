import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 32px 40px;
`

export const PostingWrapper = styled.div`
  margin-top: 52px;
`
export const Title = styled.h2`
  margin-bottom: 20px;
  ${(props) => props.theme.title[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Container = styled.div`
  overflow: auto;
  height: calc(100vh - 328px);
`
export const Header = styled.div`
  display: grid;
  align-items: center;
  max-height: calc(100vh - 366px);
  height: 44px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  grid-template-columns:
    minmax(270px, 2.5fr) minmax(160px, 1fr) minmax(140px, 1fr) minmax(140px, 1fr)
    minmax(120px, 1fr) minmax(110px, 0.5fr) minmax(110px, 0.5fr) minmax(110px, 0.5fr);
  color: ${(props) => props.theme.colors.neutralGray400};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding-left: 8px;
`
