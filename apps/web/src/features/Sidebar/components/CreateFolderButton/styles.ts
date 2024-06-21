import styled from 'styled-components'

export const Wrapper = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    svg > path {
      fill: ${(props) => props.theme.colors.blue500};
    }
  }
`
