import styled from 'styled-components'

export const ScheduleEvent = styled.div`
  position: relative;
  width: calc(100% - 12px);
  margin: 0 auto;
  border-radius: 4px;
  overflow: hidden;
`
export const ScheduleTitle = styled.p<{
  $backgroundColor: string
  $isCanceled: boolean
  $isBefore: boolean
}>`
  padding: 2px 4px 2px 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;
  overflow: hidden;
  color: ${(props) =>
    props.$isBefore ? props.theme.colors.neutralGray400 : props.theme.colors.black};
  text-decoration: ${(props) => props.$isCanceled && 'line-through'};
`

export const ScheduleBg = styled.div<{
  $backgroundColor: string
  $isBefore: boolean
}>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  padding: 3px 10px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background: ${(props) => (props.$isBefore ? '#d6d6d6' : props.$backgroundColor)};
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.$isBefore ? props.theme.colors.neutralGray400 : props.$backgroundColor};
    opacity: 0.3;
  }
`
