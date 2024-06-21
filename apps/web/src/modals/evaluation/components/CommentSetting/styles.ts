import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.neutralGray50};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 6px;
  padding: 0 16px;
`

export const TextBox = styled.div`
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

export const Description = styled.span`
  color: ${(props) => props.theme.colors.neutralGray300};
`

export const OptionBox = styled.div`
  display: flex;
  align-items: center;
`

export const OptionLabel = styled.span`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-right: 8px;
`

export const RemoveButton = styled.button`
  height: 16px;
  margin-left: 12px;
`
