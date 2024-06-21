import styled from 'styled-components'

export const RequestBody = styled.div`
  display: flex;
  padding: 48px 89px;
  margin-top: 38px;
  flex-wrap: wrap;
  gap: 10px;
  background: ${(props) => props.theme.colors.neutralGray50};

  > div,
  input {
    flex: 1 1 100%;
    text-align: left;
  }
`

export const SuccessText = styled.div`
  text-align: center;
`
