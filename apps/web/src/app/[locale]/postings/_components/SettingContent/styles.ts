import styled from 'styled-components'

export const DropdownGroup = styled.div``

export const DropdownGroupTitle = styled.div`
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 8px 10px;
`

export const PostingPreview = styled.div`
  margin-top: 4px;
  > a {
    min-width: 184px;
  }
`
