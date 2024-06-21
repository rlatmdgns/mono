import styled from 'styled-components'

export const Folder = styled.li`
  padding: 12px 0;

  &:not(:first-of-type) {
    border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
  }
`

export const FolderName = styled.span`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 9px 12px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  ${(props) => props.theme.fonts[12]}
  color: ${(props) => props.theme.colors.neutralGray500};
`
