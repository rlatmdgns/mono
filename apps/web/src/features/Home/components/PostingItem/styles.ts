import styled from 'styled-components'

interface StylesProps {
  $isClose: boolean
}

export const Item = styled.li<StylesProps>`
  display: grid;
  align-items: center;
  grid-template-columns:
    minmax(270px, 2.5fr) minmax(160px, 1fr) minmax(140px, 1fr) minmax(140px, 1fr)
    minmax(120px, 1fr) minmax(110px, 0.5fr) minmax(110px, 0.5fr) minmax(110px, 0.5fr);
  height: 56px;

  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  cursor: pointer;
  padding-left: 8px;
  opacity: ${(props) => props.$isClose && 0.3};

  &:hover {
    background: ${(props) => props.theme.colors.neutralGray50};
  }
`
export const TitleBox = styled.div<{ $isActivate: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.colors.neutralGray900};
  padding: 0 10px 0 8px;

  &:before {
    display: block;
    content: '';
    min-width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) =>
      props.$isActivate ? props.theme.colors.blue500 : props.theme.colors.neutralGray200};
    box-shadow: ${(props) => props.$isActivate && '0 0 4px 0 rgba(70, 142, 255, 0.5)'};
  }
`
export const Title = styled.div<StylesProps>`
  display: inline-block;
  max-width: 75%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: ${(props) => props.$isClose && 'line-through'};
`
export const Field = styled.div`
  color: ${(props) => props.theme.colors.neutralGray900};
`
export const Date = styled.div``
export const Member = styled.div``
export const Count = styled.div``
