import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    ${(props) => props.theme.fonts[11]};
  }
`

export const View = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`
