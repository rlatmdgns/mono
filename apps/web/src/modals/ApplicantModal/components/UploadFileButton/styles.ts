import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
`

export const Inner = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.colors.blue300};
  border-radius: 50%;
  box-shadow: 0 0 16px rgba(126, 148, 189, 0.3);

  &:disabled {
    background-color: rgba(70, 142, 255, 0.3);
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors.blue500};
  }
`
