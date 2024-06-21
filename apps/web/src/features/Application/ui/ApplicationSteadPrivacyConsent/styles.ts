import styled from 'styled-components'

export const Content = styled.div`
  position: relative;
  padding: 12px;
  background-color: #faf9f9;
  border-radius: 4px;

  button {
    position: absolute;
    top: 14px;
    right: 12px;
  }
`

export const Inner = styled.div`
  display: flex;
  gap: 4px;
  height: 20px;
`

export const Text = styled.span`
  ${(props) => props.theme.fonts[14]};
  line-height: 20px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`
