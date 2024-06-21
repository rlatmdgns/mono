import styled from 'styled-components'

export const InterviewEventWrapperContainer = styled.div`
  z-index: ${(props) => props.theme.zIndexes.dropdown};
  .rbc-events-container {
    position: static !important;
  }
`
