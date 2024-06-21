import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 60px;
  border-radius: 16px 16px 0 0;
`

export const Info = styled.div`
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Title = styled.span`
  max-width: calc(100% - 60px);
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 14px;
  color: ${(props) => props.theme.colors.neutralGray800};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Count = styled.span`
  padding: 2px 6px;
  border-radius: 3px;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  background: ${(props) => props.theme.colors.blue100};
  color: ${(props) => props.theme.colors.blue500};
`
