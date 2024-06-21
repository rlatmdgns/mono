import styled from 'styled-components'

export const FileUploadContainer = styled.div`
  &:nth-child(n + 2) {
    margin-top: 20px;
  }

  > div label,
  > div + div {
    background: ${(props) => props.theme.colors.white};
  }
`

export const FileLabel = styled.div`
  margin-bottom: 8px;
`

export const FileTitle = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const FileNotice = styled.p`
  margin-top: 4px;
`
