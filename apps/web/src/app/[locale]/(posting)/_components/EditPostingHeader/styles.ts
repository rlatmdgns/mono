import styled from 'styled-components'

export const Header = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: minmax(200px, 1fr) 538px 1fr;
  margin: 0 auto;
  min-width: 600px;
  padding: 0 16px;
  height: 72px;
`

export const Title = styled.h2`
  ${(props) => props.theme.fonts[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const ProgressBar = styled.div<{ $step: number }>`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.neutralGray200};
  border-radius: 2px;
  transform: translateY(-0.3px);
  transition: all 450ms ease-in-out 0s;

  &:before {
    content: '';
    position: absolute;
    top: -0.5px;
    left: 0;
    width: ${(props) => props.$step * 33.3}%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.blue500};
    border-radius: 2px;
    transition: all 450ms ease-in-out 0s;
  }
`
