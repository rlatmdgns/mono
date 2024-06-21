import styled from 'styled-components'
import { IMAGES } from '@/shared/constants'

export const DropdownIndicatorArrow = styled.span<{ $isMenuOpen: boolean }>`
  transition: all 200ms ease-in-out;
  transform: ${(props) => (props.$isMenuOpen ? 'rotate(180deg)' : null)};
`

export const FormatGroupLabel = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`

export const OptionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const OptionLabelText = styled.span<{ $isOverflowTooltip?: boolean }>`
  ${(props) =>
    props.$isOverflowTooltip &&
    `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`

export const Badge = styled.span`
  margin-left: auto;
`

export const MemberOptionLabel = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

export const MemberTextWrapper = styled.div`
  display: flex;
  width: calc(100% - 30px);
  flex: 0 0 calc(100% - 30px);
  gap: 10px;
  align-items: center;
`

export const MemberOptionLabelText = styled.span`
  color: ${(props) => props.theme.colors.neutralGrey700};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  ${(props) => props.theme.fonts[14]}
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const MultiValueRemoveButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  &,
  :hover {
    button,
    img {
      -webkit-filter: none !important;
      filter: none !important;
    }
  }
`

export const GoogleIcon = styled.div`
  width: 18px;
  height: 18px;
  background: url(${IMAGES.GOOGLE_CALENDAR}) no-repeat center / contain;
`

export const FormatOptionLabel = styled.div`
  width: 100%;
  height: 106px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormatOptionLabelText = styled.p`
  text-align: center;
  margin-bottom: 20px;
`
