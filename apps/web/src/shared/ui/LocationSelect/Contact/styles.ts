import styled from 'styled-components'

export const ContactWrap = styled.div``
export const Content = styled.div``

export const GroupTitle = styled.h3`
  padding: 12px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`

export const DropdownItem = styled.button<{ $isCurrent: boolean }>`
  position: relative;
  width: 100%;

  > div {
    color: ${(props) => props.$isCurrent && props.theme.colors.blue600};
  }
`

export const ModifyButtonWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`

export const ContactInfo = styled.div`
  width: 90%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  svg {
    vertical-align: middle;
    margin-right: 8px;
  }
`
