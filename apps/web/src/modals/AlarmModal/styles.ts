import styled from 'styled-components'

export const Wrapper = styled.div<{ $width: number; $wrapperWidth: string }>`
  position: fixed;
  top: 28px;
  left: calc(${(props) => props.$width}px - 9px);
  width: ${(props) => props.$wrapperWidth};
  box-shadow: 0 4px 40px 0 rgba(161, 176, 203, 0.6);
  border-radius: 11px;

  & > ul {
    height: 44px;
    border-bottom: none;
    border-radius: 11px 11px 0 0;

    li {
      border-radius: 11px;
    }
  }
`
