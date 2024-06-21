import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.neutralGray100};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  padding: 0 10px;
  cursor: pointer;
`
