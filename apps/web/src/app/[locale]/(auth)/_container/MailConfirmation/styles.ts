import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const Title = styled.h1`
  ${(props) => props.theme.fonts[28]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Desc = styled.p`
  margin: 0;
  text-align: center;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Mail = styled.span`
  color: ${(props) => props.theme.colors.blue600};
`

export const RepeatRequestBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 20px;
  width: 504px;
  border-top: 1px solid #e8e8e8;
`

export const RequestInfo = styled.p`
  margin: 0;
  text-align: center;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const RequestButton = styled.button`
  padding: 10px;
  width: 184px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.neutralGray500};
  border: 1px solid ${(props) => props.theme.colors.neutralGray500};
  border-radius: 6px;
  transition: ease-out 300ms;

  &:hover {
    background-color: ${(props) => props.theme.colors.neutralGray200};
    border-color: transparent;
  }
`
