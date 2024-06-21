import styled, { css } from 'styled-components'

export const InterviewBar = styled.div<{ $state: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  border-radius: 4px;
  padding: 4px;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.bold};

  ${(props) => {
    switch (props.$state) {
      case 'completed':
        return css`
          color: ${(props) => props.theme.colors.systemGreen500};
          background-color: ${(props) => props.theme.colors.systemGreen100};
        `
      case 'ongoing':
        return css`
          color: ${(props) => props.theme.colors.systemOrange500};
          background-color: ${(props) => props.theme.colors.systemOrange100};
        `
      case 'canceled':
        return css`
          color: ${(props) => props.theme.colors.white};
          background-color: ${(props) => props.theme.colors.neutralGray600};
        `
      default:
        return css`
          color: ${(props) => props.theme.colors.blue500};
          background-color: ${(props) => props.theme.colors.blue100};
        `
    }
  }}
`

export const Text = styled.em`
  display: flex;
  align-items: center;
  gap: 4px;
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const Date = styled.em<{ $isCanceled: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-style: normal;

  ${(props) =>
    props.$isCanceled &&
    css`
      text-decoration: line-through;
      opacity: 0.5;
    `};
`
