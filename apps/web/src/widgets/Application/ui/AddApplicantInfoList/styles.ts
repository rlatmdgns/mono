import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 312px;
  height: calc(100vh - 73px);
  background-color: ${(props) => props.theme.colors.white};
  border-right: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const Title = styled.div`
  padding: 18px 12px;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
`

export const Inner = styled.div`
  width: 100%;
  height: calc(100% - 53px);
  padding: 0 6px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.neutralGray50};
    border-left: 1px solid ${(props) => props.theme.colors.neutralGray200};
    padding: 1px 0;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${(props) => props.theme.colors.neutralGray300};
    border-radius: 6px;
    border-top: 1px solid transparent;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  }

  & > ul:last-of-type {
    margin-bottom: 12px;
  }
`

export const Field = styled.div`
  padding: 12px;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray600};
`

export const List = styled.ul``
