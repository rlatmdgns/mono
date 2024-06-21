import styled from 'styled-components'

export const Wrapper = styled.div``

export const Container = styled.div`
  position: relative;
`

export const Input = styled.input`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  width: 279px;
  height: 20px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
  background-color: ${(props) => props.theme.colors.white};
  border: none;
  outline: none;
`

export const Error = styled.p`
  margin: 10px 0 0 0;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.red500};
  text-align: left;
`
