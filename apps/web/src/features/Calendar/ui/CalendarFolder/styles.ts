import styled from 'styled-components'

export const Wrapper = styled.div`
  &:before {
    display: block;
    content: '';
    margin: 12px auto;
    width: calc(100% - 24px);
    height: 1px;
    background: ${(props: any) => props.theme.colors.neutralGray100};
  }
`

export const FolderTitle = styled.p`
  padding: 9px 10px 9px 12px;
  ${(props) => props.theme.fonts[12]}
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
