import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`

export const Container = styled.form`
  width: 100%;
  height: calc(100% - 65px);
  position: relative;
`

export const Title = styled.div`
  > div input {
    height: 68px;
    padding: 16px 0;
    ${(props) => props.theme.fonts[24]};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.neutralGray800};
    border: none;

    &::placeholder {
      ${(props) => props.theme.fonts[24]};
    }

    &:focus {
      border: none;
      background: none;
      box-shadow: none;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};

  button:last-child {
    width: 58px;
  }
`
