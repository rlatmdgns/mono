import styled from 'styled-components'

export const Aside = styled.aside`
  display: block;
  width: 256px;
  height: 856px;
  border-right: 1px solid ${(props) => props.theme.colors.neutralGray100};
  padding: 24px 16px;

  ${(props) => `${props.theme.breakpoints.mobile} and (max-width: 1200px)`} {
    width: 100%;
    padding: 24px 16px;
  }
`

export const Container = styled.div`
  height: 100%;
  overflow: auto;
  margin: 0 -10px;
  padding: 0 10px;
`

export const EntirePosting = styled.div<{ $isActive: boolean }>`
  button {
    justify-content: flex-start;
    background: none;
    background: ${(props) => (props.$isActive ? props.theme.colors.neutralGray100 : 'none')};

    &:hover {
      background: ${(props) => props.theme.colors.neutralGray50} !important;
    }
  }
`
