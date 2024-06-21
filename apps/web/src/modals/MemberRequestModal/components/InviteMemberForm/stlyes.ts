import styled from 'styled-components'

export const InviteMemberRow = styled.div`
  display: flex;
  gap: 8px;

  button {
    height: 42px;
  }
`

export const InviteMemberBox = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 6px;
  flex: 1;
`

export const InputBox = styled.div`
  flex: 5.5;

  > div > input {
    border: none;
  }
`

export const SelectWrap = styled.div`
  flex: 2.5;

  > div > div {
    border: none;

    &select:focus {
    }
  }
`
