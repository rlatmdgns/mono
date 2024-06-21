import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.neutralGray50};
  border-radius: 8px;
  padding: 0 16px;
`

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > div {
    height: 16px;
  }
`

export const Text = styled.span`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
