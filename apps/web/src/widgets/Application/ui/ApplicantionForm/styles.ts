import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
  width: calc(100vw - 580px);
  height: calc(100vh - 105px);
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Form = styled.div`
  width: 600px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 4px;

  > div > div {
    padding: 24px;
  }

  > ul > li > div:first-of-type > div {
    padding: 24px;
  }
`

export const Header = styled.div``
