import styled from 'styled-components'

export const PostingHeader = styled.div`
  padding: 0 40px;
`
export const Title = styled.h3`
  margin: 0;
  ${(props) => props.theme.fonts[18]}
  font-weight: ${(props) => props.theme.fontWeights.bold};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
`

export const Left = styled.div`
  width: calc(100% - 240px);
  display: flex;
  align-items: center;
  gap: 6px;

  em {
    flex-shrink: 0;
  }
`
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
