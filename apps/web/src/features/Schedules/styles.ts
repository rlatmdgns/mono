import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`

export const Body = styled.div`
  display: flex;
  height: calc(100% - 63px);
  position: relative;
  padding: 0 16px;
`
export const CalendarWrap = styled.div<{
  $unableToSetSchedule: boolean
  $isSoloApplicants: boolean
}>`
    position: relative;
    width: 85%;
    height: calc(100vh - 224px);

    .rbc-calendar {
        ${(props) => props.theme.fonts[12]};

        .rbc-time-view {
            border: 1px solid ${(props) => props.theme.colors.neutralGray100};

            .rbc-allday-cell {
                display: none;
            }
        }

        .rbc-row {
            align-items: end;
        }

        .rbc-header {
            padding: 9px 0;
            border: none;
            border-right: 1px solid ${(props) => props.theme.colors.neutralGray100};
            border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};

            &.rbc-today {
                background: none;

                .day-of-week + span {
                    width: 18px;
                    text-align: center;
                    ${(props) => props.theme.fonts[12]};
                    background: ${(props) => props.theme.colors.blue500};
                    color: ${(props) => props.theme.colors.white};
                    border-radius: 12px;
                    box-sizing: border-box;
                }
            }

            button {
                cursor: initial;
                pointer-events: none;
            }
        }


        .rbc-time-header-gutter,
        .rbc-time-gutter {
            width: 48px;

            .rbc-timeslot-group {
                flex-flow: wrap;
                justify-content: center;
                border-bottom: none;
            }

            .rbc-time-slot:hover {
                background: none;
            }
        }

        .rbc-time-header-content {
            border-left: 1px solid ${(props) => props.theme.colors.neutralGray100};
        }

        .rbc-time-header-gutter {
            border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
        }

        .rbc-week {
            span {
                display: block;
                ${(props) => props.theme.fonts[12]};

                &.day-of-week {
                    margin-bottom: 2px;
                }
            }

            &.rbc-sunday {
                color: #ff7067;
            }

            &.rbc-saturday {
                color: #2275f8;
            }
        }

        .rbc-event,
        .rbc-day-slot .rbc-background-event {
            //padding:0;
            overflow: visible;
            z-index: ${(props) => props.theme.zIndexes.dropdown};
        }

        .rbc-addons-dnd-resizable {
            //border: 2px solid transparent;
        }

        .rbc-day-slot {
            border-radius: 4px;
            background: ${(props) => props.$unableToSetSchedule && `repeating-linear-gradient(45deg, #fff, #fff 10px, ${props.theme.colors.neutralGray200} 0, #fff 12px)!important`};

            &.rbc-time-column {
                position: relative;
            }

            &.rbc-today {
                .rbc-time-slot {
                    display: block;
                }
            }

            &.rbc-today ~ div {
                background: ${(props) => props.theme.colors.white};

                .rbc-time-slot {
                    display: block;
                }
            }


            .rbc-events-container {
                width: ${(props) => props.$isSoloApplicants && '85% !important'};
                margin-right: 0;
            }

            .rbc-event {
                z-index: ${(props) => props.theme.zIndexes.card};
                background: none;
                border: ${(props) => !props.$isSoloApplicants && `${props.theme.colors.blue600}!important`};
                text-align: center;

                .rbc-event-content {
                    border-radius: 4px;
                    background: ${(props) => props.theme.colors.blue500};
                    transition: background 0.3s;
                }

                &:hover .rbc-event-content {
                    button {
                        display: block;
                    }
                }

                .rbc-event-label {
                    width: calc(100% - 10px);
                    overflow: hidden;
                    padding: 0 4px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    ${(props) => props.theme.fonts[12]};
                    font-size: 11px;
                    font-weight: ${(props) => props.theme.fontWeights.semiBold};
                }

                .rbc-addons-dnd-resize-ns-anchor {
                    width: 80%;
                    height: 2px;
                    left: 50%;
                    border-radius: 6px;
                    transform: translate(-50%, 0);
                    z-index: 2;

                    &:first-of-type {
                        top: 2px;
                    }

                    .rbc-addons-dnd-resize-ns-icon {
                        width: 20px;
                        height: 1px;
                        border: none;
                        border-radius: 4px;
                        background: ${(props) => props.theme.colors.blue300};
                    }
                }
            }
        }

        .rbc-time-header.rbc-overflowing {
            border: none;
        }

        .rbc-toolbar-label + .rbc-btn-group {
            display: none;
        }

        .rbc-current-time-indicator {
            background: none;
        }

        .rbc-time-content {
            border-top: none;
        }

        .rbc-timeslot-group {
            position: relative;
            min-height: 100px;
            border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
        }

        .rbc-time-content > * + * > * {
            border-left: 1px solid ${(props) => props.theme.colors.neutralGray100};
        }


        .rbc-day-slot .rbc-time-slot:last-child {
            border: none;
        }

        .rbc-label {
            ${(props) => props.theme.fonts[10]};
            color: #a1b0cb;
        }

        .rbc-slot-selection {
            z-index: ${(props) => props.theme.zIndexes.dropdown};
            background: ${(props) => props.theme.colors.blue500};
            border-radius: 4px;
        }

        // 구글 캘린더

        .google-schedule {
            width: 100%;
            height: 100%;
            margin-left: 2%;
            border-radius: 6px;
            overflow: hidden;
            background: ${(props) => props.theme.colors.background200};
            border: 1px solid ${(props) => props.theme.colors.neutralGray200};

            .rbc-events-container {
                position: static;
            }

            .rbc-event-content {
                background: none !important;
            }

            .rbc-event {
                position: static;
                padding: 0;
                width: 100% !important;
            }

            .rbc-event-label {
                position: static !important;
                padding: 0 !important;
                transform: translate(0, 0) !important;
                text-align: left;
            }
        }
    }
}
`

export const ScheduledInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > div {
    width: 100%;
  }
`

export const ScheduledTooltip = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ScheduleRemoveButton = styled.button`
  display: none;
  position: absolute;
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  padding: 2px;
  z-index: ${(props) => props.theme.zIndexes.modal};
  background: ${(props) => props.theme.colors.neutralGray700};
  border-radius: 50%;
`

export const InitButtons = styled.div`
  position: absolute;
  top: 12px;
  right: 32px;
`
