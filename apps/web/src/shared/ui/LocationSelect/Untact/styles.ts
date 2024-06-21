import styled from 'styled-components'

export const UntactWrap = styled.div`
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    margin: 2px 0;
    background: ${(props) => props.theme.colors.neutralGray100};
  }
`

export const GroupTitle = styled.h3`
  padding: 12px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`

export const DropdownItem = styled.button<{ $isCurrent: boolean }>`
  width: 100%;

  > div {
    padding: 12px;
    color: ${(props) => props.$isCurrent && props.theme.colors.blue600};
  }
`
