import styled from 'styled-components'

export const Wrapper = styled.div`
  > button {
    margin-top: 20px;
  }
`

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  margin-bottom: 12px;
`

export const RequiredMark = styled.span`
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.red500};

  &::after {
    content: '*';
  }
`

export const QuestionBox = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  height: 16px;
  z-index: 11;
`

export const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  ${(props) => props.theme.fonts[16]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray400};
  pointer-events: none;
`

export const Input = styled.input`
  padding: 0;
  width: 100%;
  ${(props) => props.theme.fonts[16]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
  background-color: transparent;
  border: none;
  outline: none;
`
