import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray200};
  padding: 16px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;

  & > div {
    height: 16px;
    margin-right: 4px;
  }
`

export const Text = styled.span`
  display: flex;
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  white-space: pre-wrap;
`

export const RequiredDot = styled.span<{
  $isRequired?: boolean
}>`
  color: ${(props) => props.theme.colors.red500};
  vertical-align: middle;
  margin-left: 4px;
`

export const Description = styled.span`
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
