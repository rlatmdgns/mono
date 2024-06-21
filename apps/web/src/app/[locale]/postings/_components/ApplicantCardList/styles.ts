import styled from 'styled-components'

export const CardList = styled.ul<{
  $isDragging: boolean
  $isDocumentSubmission?: boolean
}>`
  min-width: 282px;
  max-width: 282px;
  height: ${(props) =>
    props.$isDocumentSubmission ? 'calc(100vh - 288px)' : 'calc(100vh - 230px)'};
  background-color: ${(props) => props.$isDragging && props.theme.colors.neutralGray100};
  overflow: auto;
  padding: 20px 16px;
  transition: background-color 0.3s ease-in-out;

  li + li {
    margin-top: 8px;
  }
`
