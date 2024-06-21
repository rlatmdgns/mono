import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 0 14px 0;
  margin: 14px 0 0 48px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};

  & > button {
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }
`
