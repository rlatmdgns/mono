import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 700px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
`

export const Member = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const Label = styled.span`
  font-size: 12px;
`
