import styled, { css } from 'styled-components'

interface AvatarMultipleProps {
  $size?: 'sm'
}

export const Length = styled.div<AvatarMultipleProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-left: -8px;
  border: 1px solid ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.neutralGray100};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.neutralGray600};
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: '';
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.blue500};
    opacity: 0;
  }

  ${(props) =>
    props.$size === 'sm' &&
    css`
      width: 20px;
      height: 20px;
      ${(props) => props.theme.fonts[10]};

      &:before {
        width: 20px;
        height: 20px;
      }
    `}
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover li:after {
    opacity: 0.5;
  }

  &:active li:after {
    opacity: 0.75;
  }

  &:hover ${Length}, &:active ${Length} {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.blue500};
  }

  cursor: pointer;
`

export const List = styled.ul<AvatarMultipleProps>`
  display: flex;
  align-items: center;
  width: ${(props) => (props.$size === 'sm' ? '44px' : '78px')};
  height: ${(props) => (props.$size === 'sm' ? '20px' : '32px')};
  background-size: contain;
`

export const Item = styled.li<AvatarMultipleProps>`
  position: relative;

  & + & {
    margin-left: -8px;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: '';
    width: ${(props) => (props.$size === 'sm' ? '20px' : '32px')};
    height: ${(props) => (props.$size === 'sm' ? '20px' : '32px')};
    border-radius: 50%;
    background: ${(props) => props.theme.colors.blue500};
    opacity: 0;
  }
`

export const UnknownAvatar = styled.div<AvatarMultipleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.$size === 'sm' ? '20px' : '32px')};
  height: ${(props) => (props.$size === 'sm' ? '20px' : '32px')};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px dashed ${(props) => props.theme.colors.neutralGray200};
  border-radius: 50%;
`
