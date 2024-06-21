import styled from 'styled-components'

export const SelectScheduleWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  height: 100vh;
  text-align: center;
  background: ${(props) => props.theme.colors.neutralGray100};
`

export const Container = styled.div`
  width: 100%;
  max-height: 100%;
  padding: 120px 0;
  overflow-y: auto;

  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 1200px)`} {
    padding: 60px 0;
  }
`

export const SelectScheduleBox = styled.div<{ $isComplete: boolean }>`
  width: ${(props) => (props.$isComplete ? '760px' : '860px')};
  margin: 0 auto;
  padding: ${(props) => (props.$isComplete ? '58px 104px 0' : '58px 104px')};
  background: ${(props) => props.theme.colors.white};
  overflow-y: auto;

  ${(props) => `${props.theme.breakpoints.mobile} and  (max-width: 670px)`} {
    width: calc(100% - 20px);
    padding: 25px;
  }

  ${(props) => `${props.theme.breakpoints.landscapeMobile}  and (max-width: 1200px)`} {
    width: calc(80% - 20px);
    padding: 24px 50px;
  }
`

export const SelectLoadingBox = styled.div`
  width: 860px;
  height: 240px;
  margin: 0 auto;
  box-sizing: content-box;
  border-radius: 8px;

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
