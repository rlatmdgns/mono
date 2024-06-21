import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: space-between;
  padding: 12px 10px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.neutralGray50};

  & + & {
    margin-top: 4px;
  }
`

export const Text = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  ${(props) => props.theme.title[11]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
export const Title = styled.em`
  width: 72px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.neutralGray800};
  font-style: normal;
`

export const Description = styled.p`
  max-width: 320px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.neutralGray400};
`
