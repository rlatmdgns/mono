import styled from 'styled-components'

export const GuideStepButton = styled.button<{ $isDeltaX: string }>`
  display: flex;
  width: 94px;
  height: 100%;
  padding: 0 10px;
  gap: 10px;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.neutralGray400};

  &:hover {
    color: ${(props) => props.theme.colors.blue400};

    svg {
      filter: invert(59%) sepia(8%) saturate(3293%) hue-rotate(180deg) brightness(103%)
        contrast(96%);
    }
  }

  svg {
    transform: ${(props) => (props.$isDeltaX === 'next' ? 'rotate(0)' : 'rotate(-180deg)')};
  }
`

export const GuideStepDummy = styled.i`
  display: block;
  width: 94px;
`

export const GuideNextDetailButton = styled.button`
  display: flex;
  height: 42px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  background-color: #0086ff;
  color: #fff;
  border-radius: 6px;

  svg {
    color: #fff;
  }
`
