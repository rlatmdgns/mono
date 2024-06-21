import styled from 'styled-components'

export const Wrapper = styled.div``

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  > textarea {
    margin-top: 12px;
  }

  &:not(:first-of-type) {
    margin-top: 24px;
  }
`

export const Note = styled.p`
  margin-top: 12px;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray600};
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 12px;
`

export const CountWrapper = styled.div`
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`

export const Count = styled.span`
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`
