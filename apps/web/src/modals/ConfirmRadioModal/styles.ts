import styled from 'styled-components'

interface StyleProps {
  $state?: 'positive' | 'negative'
}

interface SelectedProps {
  $selected?: boolean
}

interface RadioItemProps {
  $selected?: boolean
  $state?: 'positive' | 'negative'
}

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px 16px 16px 16px;
  width: 320px;
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
    props.$state === 'negative' ? props.theme.colors.red100 : props.theme.colors.blue100};
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
`

export const Subtitle = styled.dd`
  width: 100%;
  margin: 8px 0 0 0;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

export const RadioItem = styled.div<RadioItemProps>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-radius: 6px;
  border: 1px solid
    ${(props) =>
      props.$selected
        ? props.$state === 'positive'
          ? props.theme.colors.blue500
          : props.theme.colors.red500
        : props.theme.colors.neutralGray200};
  padding: 8px;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const RadioText = styled.span<SelectedProps>`
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  opacity: ${(props) => (props.$selected ? 1 : 0.6)};
`

export const RadioTextInputBox = styled.div`
  padding-left: 22px;

  input:focus {
    border-color: ${(props) => props.theme.colors.neutralGray200};
    box-shadow: none;
  }
`
