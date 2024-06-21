import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 20px;
  padding: 20px 40px;
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 6px -2px 4px 0 rgba(118, 118, 118, 0.11);
  border-radius: 12px 12px 0 0;
  overflow: scroll;
  z-index: 999;

  ${(props) => props.theme.breakpoints.pc} {
    display: none;
  }

  > button {
    width: 56px;
    height: 56px;
    padding: 16px;
  }

  > a {
    height: 56px;
  }
`

export const LinkBox = styled.div<{ $disabled?: boolean }>`
  flex-grow: 1;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};

  a {
    ${(props) => props.theme.fonts[18]};
    height: 56px;
  }
`
