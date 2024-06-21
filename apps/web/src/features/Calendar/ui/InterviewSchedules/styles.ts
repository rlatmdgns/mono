import styled from 'styled-components'

export const InterviewSchedules = styled.div`
  position: relative;
  height: 100%;
  padding: 20px;

  .rbc-calendar {
    ${(props) => props.theme.fonts[12]};

    .rbc-row {
      align-items: end;
    }

    .rbc-header {
      margin-bottom: 12px;
      padding: 10px 0;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray50};

      button {
        cursor: initial;
        pointer-events: none;
      }
    }

    .rbc-month-view {
      border: none;
      background: ${(props) => props.theme.colors.white};
    }

    .rbc-week {
      color: ${(props) => props.theme.colors.neutralGray400};

      span {
        display: block;
        ${(props) => props.theme.fonts[12]};

        &.day-of-week {
          margin-bottom: 2px;
        }
      }

      &.rbc-sunday {
        color: ${(props) => props.theme.colors.red500};
      }

      &.rbc-saturday {
        color: #2275f8;
      }
    }

    .rbc-button-link:not(.rbc-show-more) {
      pointer-events: none;
    }

    .rbc-event,
    .rbc-day-slot .rbc-background-event {
      position: relative;
      padding: 0;
      overflow: visible;
      z-index: ${(props) => props.theme.zIndexes.dropdown};
      background: transparent;
    }

    .rbc-toolbar-label + .rbc-btn-group {
      display: none;
    }

    .rbc-date-cell {
      margin: 4px 0 10px;
      font-weight: ${(props) => props.theme.fontWeights.medium};

      &:first-child {
        color: ${(props) => props.theme.colors.red500};
      }
    }

    .rbc-now {
      background: none;

      button {
        width: 18px;
        text-align: center;
        ${(props) => props.theme.fonts[12]};
        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors.blue500};
        border-radius: 12px;
        box-sizing: border-box;
      }
    }

    .rbc-month-header {
      border: none;

      & + .rbc-month-row .rbc-row-bg {
        border-radius: 6px 6px 0 0;
      }
    }

    .rbc-month-row {
      overflow: visible;

      .rbc-row-bg {
        overflow: hidden;
      }

      &:last-child .rbc-row-bg {
        border-radius: 0 0 6px 6px;
      }
    }

    .rbc-row-content {
      z-index: 1 !important;
      border-radius: 6px;
      overflow: hidden;
    }

    .rbc-show-more {
      width: 100%;
      margin-top: 2px;
      color: ${(props) => props.theme.colors.blue500};
    }

    .rbc-month-row + .rbc-month-row {
      border: none;
    }
  }
`
