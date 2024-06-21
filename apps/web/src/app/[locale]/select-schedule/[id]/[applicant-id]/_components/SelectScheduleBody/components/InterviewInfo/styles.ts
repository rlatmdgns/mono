import styled from 'styled-components'

export const InterviewInfo = styled.div`
  text-align:left;
  padding:0 124px;
  &:nth-child(n+2) {
    margin-top:30px;
  }
  
  &:nth-child(5) {
    padding-top:32px;
    border-top:20px solid ${(props) => props.theme.colors.white};
  }
}
`

export const InterviewTitle = styled.p`
  ${(props) => props.theme.fonts[12]};
  font-size: 13px;
  color: ${(props) => props.theme.colors.neutralGray500};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
export const InterviewDesc = styled.p`
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`
