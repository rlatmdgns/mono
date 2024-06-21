import styled from 'styled-components'

export const Wrapper = styled.button`
  height: 48px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.blue500};
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`
