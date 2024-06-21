import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

export const Container = styled.div``

export const VariableBox = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  box-shadow: -6px 0 26px 0 rgba(230, 238, 244, 0.8);
  border-radius: 8px;
  padding: 12px 8px;
  z-index: 1;

  & > div {
    all: unset;
    display: flex;
    align-items: center;
    gap: 7px;
  }
`

export const VariableBoxTitle = styled.p`
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
  margin-bottom: 10px;
`
