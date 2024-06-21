import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 80px 24px;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white};
  overflow-y: auto;

  ${(props) => props.theme.breakpoints.pc} {
    padding: 120px 24px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: fit-content;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

export const Icon = styled.span`
  display: inline-block;
  width: 64px;
  height: 64px;
  padding: 14px;
  background-color: ${(props) => props.theme.colors.blue100};
  border-radius: 50%;
`

export const TitleAndDesc = styled.dl`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 0;
  text-align: center;
`

export const Title = styled.dt`
  ${(props) => props.theme.fonts[28]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Desc = styled.dd`
  margin: 0;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: #a1b0cb;
`

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 24px;
  width: 100%;
  max-width: 480px;
  min-width: 360px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 6px;
`

export const FieldList = styled.dl`
  display: flex;
  justify-content: space-between;
  margin: 0;
`

export const Field = styled.dt`
  flex: 0 0 80px;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: #a1b0cb;
`

export const Value = styled.dd`
  margin: 0;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`
