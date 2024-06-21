import styled from 'styled-components'
import { getScheduleOver } from '@/features/Schedules/ui/InterviewEventWrapper/getScheduleOver'

export const Schedule = styled.div<{
  $isScheduled: boolean
  $style: any
  $isSoloApplicants: boolean
  $isScheduleOver: boolean
}>`
    .rbc-event {
        width: 100% !important;
        height: ${(props) => props.$isScheduleOver && '24px!important'};
        left: 0 !important;
        margin-left: 0 !important;
        padding: 0;
    }

    .rbc-event-content {
        background: ${(props) =>
          props.$isScheduled &&
          `repeating-linear-gradient(45deg, #fff, #fff 10px, ${props.theme.colors.neutralGray200} 0, #fff 12px)!important`};
        box-shadow: 0 2px 30px 0 rgba(194, 205, 225, 0.30);
    }

    .rbc-addons-dnd-resize-ns-anchor {
        display: ${(props) => (props.$isScheduled ? 'none!important' : 'block')};
    }

    .rbc-event-label {
        height: ${(props) => props.$isScheduleOver && '24px'};
        font-size: 11px;
        font-weight: ${(props) => props.theme.fontWeights.semiBold};
        color: ${(props) => props.$isScheduled && props.theme.colors.neutralGray400};
        ${(props) => props.$isScheduled && getScheduleOver(props.$isScheduleOver)}
`

export const GoogleSchedule = styled.div<{ $style: any; $isGoogleScheduleOver: boolean }>`
  position: absolute;
  top: ${(props) => `${props.$style?.top}%`};
  left: ${(props) => `${props.$style?.left}%`};
  width: ${(props) => `${props.$style?.width}`}; // 최대 86%
  max-width: 86%;
  height: ${(props) =>
    !props.$isGoogleScheduleOver ? `${props.$style?.height}` : '24px!important'};
  z-index: ${(props) => props.theme.zIndexes.content};
  cursor: pointer;

  > div {
    // Tooltip
    width: 100%;
    height: 100%;

    > div {
      width: 100%;
      height: 100%;
    }
  }

  .rbc-event-content {
    background: ${(props) => props.theme.colors.background200} !important;
  }

  .rbc-addons-dnd-resize-ns-anchor {
    display: none !important;
  }

  .rbc-event {
    &.rbc-selected {
      outline: none;
    }
  }

  .rbc-event-label {
    font-size: 11px;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    color: ${(props) => props.theme.colors.neutralGray500};
  }
`

export const Summary = styled.p<{ $isGoogleScheduleOver: boolean }>`
  padding: ${(props) => (props.$isGoogleScheduleOver ? '0 6px' : '4px 6px 0')};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Info = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) => props.theme.fonts[11]};
  color: ${(props) => props.theme.colors.neutralGray500};
`
export const Date = styled.p`
  padding: 0 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const User = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    justify-content: space-between;

    &:before {
        content: '·';
        display: inline-block;
        width: 16px;
        height: 16px;

`
