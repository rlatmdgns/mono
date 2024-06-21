import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 382px;
  position: fixed;
  top: 84px;
  right: calc(50% - 752px);
  transform: translate(-50%, 0);

  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 1200px)`} {
    display: none;
  }

  ${(props) => `${props.theme.breakpoints.mobile} and (max-width: 1200px)`} {
    width: calc(100% - 40px);
    max-width: 100%;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`

export const LinkBox = styled.div<{
  $disabled: boolean
}>`
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  margin-top: 28px;

  > a {
    ${(props) => props.theme.fonts[18]};
    height: 56px;
  }
`
