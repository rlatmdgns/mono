import styled from 'styled-components'

export const Menu = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
`
export const MenuItem = styled.li`
  display: flex;
  position: relative;

  & + & {
    &::before {
      display: inline-block;
      content: '';
      min-width: 1px;
      height: 40px;
      margin: 0 16px;
      background: ${(props) => props.theme.colors.neutralGray100};
    }
  }
`
export const MemberSettingButton = styled.button`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${(props) => props.theme.zIndexes.overlay};
  &:hover {
    & + div > ul > li:after {
      opacity: 0.5;
    }
    & + div > ul ~ div {
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors.blue500};
    }
  }
`
