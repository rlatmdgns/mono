import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.background200};
  padding: 32px 40px;
  overflow-y: auto;
`

export const Form = styled.form`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  padding-top: 24px;
`

export const HeaderWrapper = styled.div`
  padding: 0 24px;
`

export const FormContent = styled.div`
  padding: 0 24px;

  > div {
    > div:not(:last-of-type) {
      pointer-events: none;
    }
  }
`
