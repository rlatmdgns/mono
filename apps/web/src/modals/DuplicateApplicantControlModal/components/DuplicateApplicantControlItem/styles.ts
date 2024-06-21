import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 16px 12px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.neutralGray100};
  border-radius: 6px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TextContainer = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  max-width: 280px;
`

export const Title = styled.dt`
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Description = styled.dd`
  margin: 0;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const SwitchContainer = styled.div`
  padding-top: 10px;
`
