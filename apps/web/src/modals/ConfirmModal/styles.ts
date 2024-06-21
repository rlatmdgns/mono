import styled from 'styled-components'

interface StyleProps {
  state?: 'positive' | 'negative'
}

export const Wrapper = styled.div<{ $width?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px 16px 16px 16px;
  width: ${(props) => (props.$width ? props.$width : '320px')};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
`

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 12px;
`

export const IconContainer = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background-color: ${(props) =>
    props.state === 'negative' ? props.theme.colors.red100 : props.theme.colors.blue100};
  border-radius: 50%;
`

export const TitleAndSubtitle = styled.dl`
  width: 100%;
  text-align: center;
  margin: 0;
`

export const Title = styled.dt`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
  word-break: keep-all;
`

export const Subtitle = styled.dd`
  width: 100%;
  margin: 8px 0 0 0;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`
