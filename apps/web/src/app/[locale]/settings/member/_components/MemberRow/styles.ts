import styled from 'styled-components'

export const MemberBody = styled.div`
  margin-bottom: 208px;
`

export const MemberWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const NoList = styled.div`
  padding: 16px 8px;
  text-align: center;
  ${(props) => props.theme.fonts[14]};
`

export const AuthoritySelect = styled.div`
  width: 80%;

  > div > div {
    display: flex;
    gap: 2px;
    align-items: center;
    border: none;
  }
`

export const AuthoritySelectButton = styled.button`
  display: inline-block;
  text-align: left;

  + div {
    position: static;
    display: inline-block;
  }
`

export const DeleteMember = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
`

export const ConfirmWrapper = styled.div`
  > div {
    position: fixed;
    top: 0;
    left: 0;
  }
`

export const ModalText = styled.p``
