import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 12px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  border-radius: 6px;
  box-shadow: 0px 12px 20px 0px rgba(161, 176, 203, 0.06);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.neutralGray100};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.neutralGray200};
  }
`

export const Left = styled.div`
  display: flex;
  gap: 12px;
`

export const Right = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`

export const Title = styled.span`
  max-width: 184px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const User = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const UserName = styled.span`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`
