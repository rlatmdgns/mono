import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 40px 0 rgba(161, 176, 203, 0.6);
  border-radius: 16px 16px 0 0;
  padding: 16px;
`
