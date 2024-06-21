import styled from 'styled-components'

export const Wrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled.p`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
  margin: 0 4px 0 6px;
`
