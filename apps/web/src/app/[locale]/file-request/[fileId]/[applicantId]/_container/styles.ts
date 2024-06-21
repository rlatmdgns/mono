import styled from 'styled-components'

export const FileRequestWrap = styled.div`
  height: 100vh;
  padding: 109px 0;
  text-align: center;
  overflow-y: scroll;
  background: ${(props) => props.theme.colors.neutralGray100};
`

export const FileRequestBox = styled.div`
  width: 636px;
  margin: 0 auto;
  padding: 58px 104px;
  background: ${(props) => props.theme.colors.white};
  box-sizing: content-box;
`

export const LoadingBox = styled(FileRequestBox)`
  width: 752px;
  min-height: 400px;
  height: 100%;
  padding: 0;
  box-sizing: content-box;
`

export const BackgroundText = styled.div`
  flex: 0 0 100%;
  margin-top: 28px;
  color: ${(props) => props.theme.colors.neutralGray500};
`
export const PoweredText = styled.p`
    margin-top: 14px;
    font-weight: ${(props) => props.theme.fontWeights.bold}
}

a {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray500};
}
`
