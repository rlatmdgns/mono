import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 544px;
  border-radius: 8px;
  overflow: hidden;
  background: ${(props) => props.theme.colors.white};
`

export const Content = styled.div`
  padding: 28px 26px;
`

export const GuideWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px;
  gap: 8px;
  background: ${(props) => props.theme.colors.background200};
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 4px;
  margin-bottom: 28px;
`

export const Guide = styled.ul`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};

  li {
    position: relative;
    margin-left: 16px;
  }

  li::before {
    position: absolute;
    left: -14px;
    top: 9px;
    display: flex;
    content: '';
    min-width: 4px;
    height: 4px;
    vertical-align: top;
    background: ${(props) => props.theme.colors.neutralGray800};
    border-radius: 50%;
  }

  li:first-child:nth-last-child(1) {
    margin-left: 0;
  }

  li:first-child:nth-last-child(1):before {
    display: none;
  }
`
export const Importance = styled.em`
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.red500};
`
