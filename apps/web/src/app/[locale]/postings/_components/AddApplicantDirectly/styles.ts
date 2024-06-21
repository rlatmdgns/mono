import styled from 'styled-components'

export const Box = styled.div`
  padding: 14px 16px 4px;
  background-color: ${(props) => props.theme.colors.neutralGray50};

  > button {
    border: 1px solid ${(props) => props.theme.colors.neutralGray100};
    box-shadow: 0 20px 40px 0 rgba(161, 176, 203, 0.1);
  }

  & + ul {
    padding: 12px 16px 16px;
  }
`
