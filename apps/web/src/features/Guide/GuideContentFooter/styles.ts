import styled from 'styled-components'

export const GuideDetailFooter = styled.footer<{ $step: number }>`
  position: relative;
  padding: ${(props) => (props.$step > 0 ? '8px 20px 0' : '8px 0 0')};
  z-index: 2;
`

export const GuideStepWrapper = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
`

export const GuideStepNumber = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #0086ff;
`
