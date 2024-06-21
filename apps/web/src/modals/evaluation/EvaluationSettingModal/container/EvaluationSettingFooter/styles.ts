import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 72px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
  padding: 0 16px;
`

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  button:last-of-type {
    flex-shrink: 0;
  }
`
