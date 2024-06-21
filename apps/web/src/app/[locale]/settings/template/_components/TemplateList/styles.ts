import styled from 'styled-components'

export const NoData = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 350px;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.fonts[18]};

  img {
    display: block;
    margin: 0 auto;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.p`
  ${(props) => props.theme.fonts[16]};
  color: ${(props) => props.theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-top: 16px;
`
export const ButtonWrapper = styled.div`
  width: 124px;
  margin: 8px auto 0;
`
