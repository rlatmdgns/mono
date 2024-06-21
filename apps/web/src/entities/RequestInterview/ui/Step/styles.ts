import styled from 'styled-components'
import { IMAGES } from '@/shared/constants'

export const Step = styled.p`
  display: flex;
  gap: 8px;
  flex-grow: 1;
`

export const StepNumber = styled.span<{ $step: number; $requestStep: number }>`
  width: 16px;
  height: 16px;
  text-align: center;
  flex: 0 0 16px;
  ${(props) => props.theme.fonts[10]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0 auto;
  position: relative;
  line-height: 16px;
  border-radius: 50%;
  background: ${(props) =>
    props.$step <= props.$requestStep
      ? props.theme.colors.blue500
      : props.theme.colors.neutralGray300};
  box-shadow: ${(props) =>
    props.$step === props.$requestStep && '0px 4px 10px 0px rgba(0, 134, 255, 0.30)'};
  transition: all 0.3s;
  color: ${(props) => props.theme.colors.white};
`

export const StepText = styled.span<{ $step: number; $requestStep: number }>`
  ${(props) => props.theme.fonts[12]};
  color: ${(props) =>
    props.$step <= props.$requestStep
      ? props.theme.colors.blue500
      : props.theme.colors.neutralGray300};
  transition: all 0.3s;
`

export const StepLine = styled.div<{ $step: number; $requestStep: number }>`
  width: 52px;
  mask: url(${IMAGES.STEP_LINE}) no-repeat center / contain;
  background: ${(props) =>
    props.$step <= props.$requestStep
      ? props.theme.colors.blue500
      : props.theme.colors.neutralGray300};
  transition: all 0.3s;
`
