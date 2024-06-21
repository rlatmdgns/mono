import styled from 'styled-components'

interface TextInputProps {
  $width?: string
  $state?: 'success' | 'error'
}

interface LabelTextProps {
  $labelTextSize?: 'md' | 'lg'
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const TextContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  min-height: 16px;
`

export const Text = styled.span<LabelTextProps>`
  ${(props) => (props.$labelTextSize === 'md' ? props.theme.fonts[14] : props.theme.fonts[16])};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const RequiredMark = styled.span`
  margin-top: 3px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.red500};
`

export const GuideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 18px;
`

export const guideText = styled.div<TextInputProps>`
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) =>
    props.$state === 'error' ? props.theme.colors.red500 : props.theme.colors.neutralGray400};
`
