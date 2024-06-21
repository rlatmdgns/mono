import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: auto;
  width: 455px;
  margin-left: 8px;
  height: 600px;
  padding: 12px 16px;
  border-left: 1px solid ${(props) => props.theme.colors.neutralGray100};
`
export const Title = styled.p`
  ${(props) => props.theme.title[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`
export const Option = styled.div`
  padding: 14px 0;
`
export const OptionItem = styled.div`
  display: flex;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
export const OptionTitle = styled.div`
  min-width: 62px;
  padding: 4px 0;
  color: ${(props) => props.theme.colors.neutralGray400};
`
export const OptionContent = styled.div`
  padding: 4px 10px;
  color: ${(props) => props.theme.colors.neutralGray600};
`

export const Content = styled.div`
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
