import styled from 'styled-components'

export const ToolbarWrap = styled.div`
  display: flex;
  margin: 12px 0;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`
export const ToolbarTitle = styled.h3`
  display: flex;
  gap: 4px;
  ${(props) => props.theme.fonts[16]}
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
export const ToolbarText = styled.span``

export const MonthButtons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const MonthArrowButtons = styled.div`
  display: flex;
  gap: 4px;
`

export const MonthButton = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.4;
  }
`

export const TodayButtonWrapper = styled.div`
  > button {
    width: 40px;
    padding: 0;
  }
`
