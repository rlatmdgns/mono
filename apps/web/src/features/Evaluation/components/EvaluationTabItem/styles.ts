import styled from 'styled-components'

export const Wrapper = styled.li<{ $isPoints: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: ${(props) => props.$isPoints && 'column'};
  justify-content: center;
  gap: 3px;
  padding: 8px 0;
  text-align: center;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray400};
  background-color: ${(props) => props.theme.colors.white};

  &:not(:first-of-type) {
    border-left: 1px solid ${(props) => props.theme.colors.neutralGray200};
  }

  &:first-of-type {
    border-radius: 6px 0 0 6px;
  }

  &:last-of-type {
    border-radius: 0 6px 6px 0;
  }
`

export const Percent = styled.span`
  color: ${(props) => props.theme.colors.neutralGray800};
`
