import styled from 'styled-components'

export const Wrapper = styled.div<{ $isDraggingOver: boolean }>`
  padding-top: 2px;

  &.is-hidden {
    max-height: 0;
    overflow: hidden;
  }

  background: ${(props) =>
    props.$isDraggingOver ? props.theme.colors.neutralGray100 : props.theme.colors.neutralGray50};
`
