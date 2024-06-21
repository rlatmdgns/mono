import styled from 'styled-components'

export const DetailDateWrapper = styled.div<{ $bgColor: string }>`
  min-width: 200px;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.colors.neutralGray100};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const DetailDate = styled.div<{ $bgColor: string }>`
  text-align: center;

  &:before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    margin: 0 auto 12px;
    border-radius: 50%;
    background: ${(props) => props.$bgColor};
  }
`

export const Weekend = styled.p`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
export const Date = styled.p`
  ${(props) => props.theme.fonts[48]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`
