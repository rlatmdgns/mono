import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 674px;
  height: 624px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  overflow: hidden;

  ${(props) => `${props.theme.breakpoints.mobile} and (max-width: 767px)`} {
    width: 288px;
    height: 468px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};

  svg {
    cursor: pointer;
  }
`

export const HeaderTitle = styled.span`
  ${(props) => props.theme.fonts[16]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Body = styled.div`
  padding: 20px;
  height: 560px;
  overflow-y: auto;

  ${(props) => `${props.theme.breakpoints.mobile} and (max-width: 767px)`} {
    height: 404px;
  }

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.neutralGray50};
    border-left: 1px solid ${(props) => props.theme.colors.neutralGray200};
    border-right: 1px solid ${(props) => props.theme.colors.neutralGray200};
    border-radius: 0 0 8px 0;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${(props) => props.theme.colors.neutralGray300};
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-radius: 6px;
  }
`

export const Title = styled.h1`
  margin-bottom: 20px;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
  word-break: keep-all;
`

export const Content = styled.p`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
  white-space: pre-wrap;
`
