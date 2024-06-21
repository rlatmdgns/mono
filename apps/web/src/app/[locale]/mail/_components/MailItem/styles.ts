import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  ${(props) => props.theme.title[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Date = styled.span`
  ${(props) => props.theme.title[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray400};
`

export const Text = styled.p`
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const Subject = styled(Text)`
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray700};
`

export const Content = styled(Text)`
  margin-top: 4px;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const Wrapper = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  &:last-child {
    border-bottom: none;
  }
`

export const InnerWrap = styled.div<{
  $isSelected?: boolean
  $isRead?: boolean
  $isDelete?: boolean
}>`
  display: flex;
  gap: 12px;
  padding: 16px 12px;
  background: ${(props) =>
    props.$isSelected ? props.theme.colors.neutralGray100 : props.theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  ${Header} {
    opacity: ${(props) => (props.$isRead ? 0.4 : 1)};
  }

  ${Header}, ${Text}, ${Date} {
    opacity: ${(props) => (props.$isRead ? 0.4 : 1)};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.neutralGray50};
  }
`

export const Container = styled.div`
  flex: 1;
  max-width: 92%;
`

export const CheckBox = styled.div``
