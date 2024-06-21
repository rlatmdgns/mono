import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`

export const IconContainer = styled.div`
  padding: 14px;
  width: 64px;
  height: 64px;
  background-color: ${(props) => props.theme.colors.blue100};
  border-radius: 50%;
`

export const TextContainer = styled.dl`
  margin: 0;
  text-align: center;
`

export const Title = styled.dt`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Subtitle = styled.dd`
  display: flex;
  align-items: center;
  margin: 4px 0 0;
  ${(props) => props.theme.fonts[14]};
  line-height: 24px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`

export const PostingTitle = styled.span`
  display: inline-block;
  max-width: 150px;
  line-height: 24px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.blue600};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`
