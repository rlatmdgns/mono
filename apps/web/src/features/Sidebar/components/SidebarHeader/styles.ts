import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  padding: 16px 18px;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: -4px;
  padding: 5px 4px;
  min-width: 190px;
  height: 52px;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.colors.neutralGray100};
  }
`

export const LogoWrapper = styled.div`
  min-width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`

export const Info = styled.div`
  width: calc(100% - 70px);
  margin-left: 10px;
`

export const Company = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: 2px;
`

export const Personal = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 20px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

export const Name = styled.span`
  max-width: 60px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${(props) => props.theme.fonts[12]};
  color: ${(props) => props.theme.colors.neutralGray600};
`

const getManagerBackground = (authority?: string) => {
  switch (authority) {
    case 'adminMember':
      return css`
        color: ${(props) => props.theme.colors.red500};
        background: #faebef;
      `
    case 'recruitmentMember':
      return css`
        color: ${(props) => props.theme.colors.systemTurquoise500};
        background: ${(props) => props.theme.colors.systemTurquoise100};
      `
    default:
      return css`
        color: ${(props) => props.theme.colors.blue500};
        background: #dfeff9;
      `
  }
}

export const Manager = styled.em<{
  $authority?: string
}>`
  padding: 2px 6px;
  text-align: center;
  ${(props) => props.theme.fonts[10]};

  border-radius: 4px;
  font-style: normal;

  ${(props) => getManagerBackground(props?.$authority)}
`

export const MoreButton = styled.div``

export const NotificationButton = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
`

export const Count = styled.em`
  position: absolute;
  top: -10px;
  right: -8px;
  display: inline-block;
  padding: 2px 6px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.red500};
  border-radius: 100px;
  box-shadow: 0 4px 6px 0 rgba(255, 91, 70, 0.21);
  font-style: normal;
  text-align: center;
  ${(props) => props.theme.fonts[10]};
`
