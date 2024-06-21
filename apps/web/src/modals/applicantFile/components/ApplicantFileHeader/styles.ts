import styled from 'styled-components'

export const Header = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 16px;

  > div {
    height: 16px;
  }
`

export const HeaderTitle = styled.span`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
