import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 40px;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns:
    minmax(90px, 1fr) minmax(320px, 1fr) minmax(110px, 1fr)
    minmax(110px, 1fr) minmax(110px, 1fr) minmax(110px, 1fr) minmax(110px, 1fr);
  padding: 12px 0 12px 8px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  ${(props) => props.theme.fonts[14]};
  color: ${(props) => props.theme.colors.neutralGray400};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const Item = styled.div`
  position: relative;
`

export const ItemInner = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`

export const FilterTitle = styled.div<{
  $isSelected?: boolean
}>`
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.blue500 : props.theme.colors.neutralGray400};
`

export const FilterMenu = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  background: #fff;
  max-height: 300px;
  padding: 8px;
  overflow: auto;
  z-index: 20;
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 8px;
  box-shadow: -6px 0 26px 0 rgba(230, 238, 244, 0.8);
`

export const FilterItem = styled.div<{
  $isSelected?: boolean
}>`
  width: 100%;
  padding: 12px 8px;
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.blue500 : props.theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.neutralGray50};
  }
`

export const Folder = styled.div`
  &:not(:last-of-type) {
    padding: 3px 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  }
`

export const FolderTitle = styled.div<{
  $isSelected?: boolean
}>`
  background: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.title[12]};
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.blue500 : props.theme.colors.neutralGray400};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 8px;
`

export const AllFolder = styled(FolderTitle)`
  ${(props) => props.theme.title[14]};
  padding: 12px 8px;
`

export const Posting = styled.div<{
  $isSelected?: boolean
}>`
  ${FilterItem};
  align-items: center;
  padding: 12px 8px;
  color: ${(props) =>
    props.$isSelected ? props.theme.colors.blue500 : props.theme.colors.neutralGray800};
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.neutralGray50};
  }
`

export const ModalLayout = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
`
