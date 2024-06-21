import styled from 'styled-components'

export const PlanDetailList = styled.dl`
  display: flex;
  flex-wrap: wrap;
  margin: 36px 0 0;
  &:first-child {
    margin-top: 0;
  }
`

export const PlanTitle = styled.dt`
  flex: 1 1 100%;
  margin-bottom: 20px;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`

export const PlanItem = styled.dd`
  display: flex;
  flex: 0 0 50%;
  align-items: center;
  gap: 6px;
  margin: 0;
  ${(props) => props.theme.fonts[14]};

  &:nth-of-type(n + 3) {
    margin-top: 20px;
  }
`
