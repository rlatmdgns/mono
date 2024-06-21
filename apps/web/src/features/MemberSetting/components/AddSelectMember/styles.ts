import styled from 'styled-components'

export const Member = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  ${(props) => props.theme.fonts[11]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray600};

  & > button {
    position: absolute;
    top: 0;
    right: -4px;
  }
`

export const Name = styled.p`
  width: 40px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
