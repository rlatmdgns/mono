import styled from 'styled-components'

export const Item = styled.li<{
  $isFail?: boolean
  $isInaccessible?: boolean
}>`
  display: grid;
  align-items: center;
  grid-template-columns:
    minmax(180px, 1fr) minmax(180px, 1fr) minmax(180px, 1fr)
    minmax(124px, 1fr) minmax(210px, 1fr) 210px;
  height: 56px;
  ${(props) => props.$isFail && `opacity: 0.35;`};
  cursor: ${(props) => (props.$isInaccessible ? 'not-allowed' : 'pointer')};
  padding-left: 8px;

  &:hover {
    background-color: ${(props) => props.theme.colors.neutralGray50};
  }
`

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-right: 12px;

  img {
    flex-shrink: 0;
  }
`

export const NameText = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const Step = styled.div`
  width: 90%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Evaluation = styled.div``

export const ApplyRoute = styled.div`
  max-width: 90%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const Tag = styled.div`
  padding-right: 20px;
`
