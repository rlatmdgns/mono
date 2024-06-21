import styled from 'styled-components'

export const TimeSlotWrapper = styled.div<{ $isBefore: boolean }>`
  position: relative;
  flex: 1 0;
  text-align: center;
  background: ${(props) => !props.$isBefore && props.theme.colors.white};
  z-index: ${(props) => props.theme.zIndexes.dropdown};

  &:first-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  }

  &:hover {
    & > span {
      opacity: 1;
    }
  }
`

export const HoverBackground = styled.span`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.blue200};
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
`

export const Time = styled.div`
  text-align: center;
  ${(props) => props.theme.fonts[10]};
  color: ${(props) => props.theme.colors.neutralGray400};
`
export const Hour = styled.div``
