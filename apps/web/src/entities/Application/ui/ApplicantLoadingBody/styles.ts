import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
`

export const Wrapper = styled.section`
  width: 312px;
  height: calc(100vh - 73px);
  background-color: ${(props) => props.theme.colors.white};
  border-right: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const Title = styled.div`
  padding: 18px 12px;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
`
export const Inner = styled.div`
  width: 100%;
  height: calc(100% - 53px);
  padding: 12px;
  overflow-y: auto;
`

export const List = styled.div`
  margin-top: 12px;
  height: calc(100% - 50px);
`

export const FormWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
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

export const Header = styled.div`
  padding: 24px;
`

export const Form = styled.div`
  width: 600px;
  min-height: 668px;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
`
