import styled from 'styled-components'

export const GuideDetailStepProcessWrap = styled.div<{ $step: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: ${(props) => props.theme.colors.blue100};
  &:before {
    content: '';
    position: absolute;
    width: ${(props) => `${props.$step * 34}%`};
    height: 100%;
    border-radius: 0 8px 8px 0px;
    background: ${(props) => props.theme.colors.blue500};
    transition: width 0.3s;
  }
`
