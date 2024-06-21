import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: auto;
  min-width: 418px;
  margin-left: 8px;
  height: 600px;
  padding: 12px 16px;
  border-left: 1px solid ${(props) => props.theme.colors.neutralGray100};
`
export const Title = styled.p`
  ${(props) => props.theme.title[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`

export const Content = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
  word-break: break-all;

  a {
    pointer-events: none;
    color: #06c;
    text-decoration: underline;
  }

  img {
    max-width: 100%;
  }
`
