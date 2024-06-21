import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  right: -50px;
  width: 44px;
  transform: translateY(-50%);
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 8px;
  box-shadow: 0 4px 40px 0 rgba(161, 176, 203, 0.28);
  padding: 8px;
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  button {
    width: 28px;
    height: 28px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`
