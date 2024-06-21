import styled from 'styled-components'

export const Item = styled.li<{ $disabled: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  width: 286px;
  border-radius: 6px;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.neutralGray50};
  }
`

export const Contents = styled.div`
  display: flex;
  gap: 8px;
`

export const Icon = styled.span`
  padding: 10px;
  width: 36px;
  height: 36px;
  background-color: ${(props) => props.theme.colors.neutralGray100};
  border-radius: 4px;
`

export const Info = styled.dl`
  margin: 0;
`

export const Type = styled.dt`
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Desc = styled.dd`
  margin: 4px 0 0;
  ${(props) => props.theme.fonts[12]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`
