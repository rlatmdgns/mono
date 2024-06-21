import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 32px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray700};

  & > div {
    height: 16px;
  }
`
