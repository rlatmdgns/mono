import styled from 'styled-components'

export const ToolbarWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`

export const ToolbarDate = styled.div`
  display: flex;
  gap: 4px;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
export const TodayButtonWrap = styled.div`
  button {
  }
`

export const ToolbarText = styled.span``

export const MonthArrowButtons = styled.div`
  display: flex;
  align-content: center;
  gap: 20px;
`

export const MonthButton = styled.button`
  width: 40px;
  height: 40px;

  &:disabled {
    opacity: 0.4;
  }
`
