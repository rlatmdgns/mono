import styled from 'styled-components'

export const Form = styled.form`
  width: 400px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
`

export const FileBox = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0 2px 10px 0 rgba(166, 183, 216, 0.3);
  padding: 0 12px;
`

export const FileText = styled.span`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[11]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-left: 8px;
`
