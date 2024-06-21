import styled from 'styled-components'

export const Wrapper = styled.div<{}>`
  display: flex;
  position: relative;
  align-items: center;
  gap: 4px;
`

export const InputWrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  visibility: hidden;
`
export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  cursor: pointer;
`

export const Radio = styled.div<{
  $checked?: boolean
  $size: number
  $unselectedBackground: string
  $selectedBackground: string
  $dotColor: string
  $dotSize: number
  $positionX: number
}>`
  &:before {
    content: '';
    display: block;
    cursor: pointer;
    width: ${(props) => `${props.$size}px`};
    height: ${(props) => `${props.$size}px`};
    position: relative;
    border-radius: 16px;
    background-color: ${(props) =>
      props.$checked
        ? props.theme.colors[props.$selectedBackground]
        : props.theme.colors[props.$unselectedBackground]};
  }

  &:after {
    content: '';
    display: ${(props) => (props.$checked ? 'block' : 'none')};
    width: ${(props) => `${props.$dotSize}px`};
    height: ${(props) => `${props.$dotSize}px`};
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: ${(props) => `${props.$positionX}px`};
    transform: translateY(-50%);
    background-color: ${(props) => props.theme.colors[props.$dotColor]};
  }
`
