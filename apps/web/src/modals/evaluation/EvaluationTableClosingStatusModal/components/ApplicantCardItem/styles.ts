import styled from 'styled-components'

interface IconBoxProps {
  $bgColor: string
}

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  box-shadow: 0 18px 30px 0 rgba(161, 176, 203, 0.14);
  border-radius: 8px;
  padding: 0 16px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
export const IconBox = styled.div<IconBoxProps>`
  width: 32px;
  height: 32px;
  padding: 8px;
  background-color: ${(props) => props.theme.colors[props.$bgColor]};
  border-radius: 6px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const ApplicantName = styled.span`
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const ClosingStatus = styled.div`
  ${(props) => props.theme.fonts[11]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const Count = styled.span`
  color: ${(props) => props.theme.colors.neutralGray300};
  margin-left: 4px;
`
