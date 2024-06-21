import styled from 'styled-components'

export const RefuseScheduleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 100vh;
  text-align: center;
  background: ${(props) => props.theme.colors.neutralGray100};
`

export const RefuseScheduleBox = styled.div`
  margin: 0 auto;
  padding: 58px 104px;
  background: ${(props) => props.theme.colors.white};

  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 670px)`} {
    width: calc(100% - 20px);
    padding: 25px;
  }

  ${(props) => `${props.theme.breakpoints.landscapeMobile}  and (max-width: 1200px)`} {
    width: calc(80% - 20px);
    margin: 0;
    padding: 24px 50px;
  }
`

export const LoadingBox = styled(RefuseScheduleBox)`
  width: 509px;
  height: 370px;
  padding: 0;
  box-sizing: content-box;

  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 670px)`} {
    width: calc(100% - 20px);
  }

  ${(props) => `${props.theme.breakpoints.landscapeMobile}  and (max-width: 1200px)`} {
    width: calc(80% - 20px);
  }
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
