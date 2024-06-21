import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  padding: 0 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.neutralGray100};
  }
`

export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.neutralGray50};
  border-radius: 6px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};

  &:hover {
    filter: brightness(0) saturate(100%) invert(22%) sepia(17%) saturate(782%) hue-rotate(175deg)
      brightness(87%) contrast(86%);
  }
`
