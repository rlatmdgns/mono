import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 73px;
  ${(props) => props.theme.fonts[18]};
  line-height: 20px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 73px);
  background-color: ${(props) => props.theme.colors.white};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;

  ${(props) => props.theme.breakpoints.pc} {
    padding: 32px 0;
  }
`

export const Footer = styled.div<{ $disabled: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
  opacity: ${(props) => props.$disabled && '0.3'};
  cursor: pointer;

  ${(props) => props.theme.breakpoints.pc} {
    gap: 40px;
  }

  & > button {
    pointer-events: none;
  }
`
