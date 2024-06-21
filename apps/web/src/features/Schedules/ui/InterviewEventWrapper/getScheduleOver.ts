import { css } from 'styled-components'

export const getScheduleOver = (isOver: boolean) => {
  if (isOver) {
    return css`
      text-align: left;
      top: 0px !important;
      left: 6px !important;
      transform: translate(0, 0) !important;
      ${(props) => props.theme.fonts[11]};
      color: ${(props) => props.theme.colors.neutralGray500};

      &:before {
        content: '타 지원자 면접';
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        ${(props) => props.theme.fonts[14]};
        font-weight: ${(props) => props.theme.fontWeights.semiBold};
        color: ${(props) => props.theme.colors.neutralGray800};
      }
    `
  }
  return css`
    text-align: left;
    top: 8px !important;
    left: 8px !important;
    transform: translate(0, 0) !important;
    ${(props) => props.theme.fonts[11]};
    color: ${(props) => props.theme.colors.neutralGray500};

    &:before {
      content: '타 지원자 면접';
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      ${(props) => props.theme.fonts[14]};
      font-weight: ${(props) => props.theme.fontWeights.semiBold};
      color: ${(props) => props.theme.colors.neutralGray800};
    }
  `
}
