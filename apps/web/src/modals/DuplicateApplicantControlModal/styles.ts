import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 52px 16px 16px 16px;
  width: 376px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0px 4px 30px 0px rgba(161, 176, 203, 0.26);

  button {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`
