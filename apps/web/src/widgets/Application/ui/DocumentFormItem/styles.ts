import styled from 'styled-components'

export const Wrapper = styled.div<{
  $isDocumentSelected: boolean
}>`
  position: relative;

  &:before {
    content: '';
    width: 105%;
    height: calc(100% + 24px);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
    border: ${(props) =>
      props.$isDocumentSelected && `1px solid ${props.theme.colors.neutralGray500}`};
  }

  > div {
    position: relative;
    z-index: 2;
  }
`
