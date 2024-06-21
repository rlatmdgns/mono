import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 6px;
  border: 1px solid #eee;
  padding: 10px;
  margin-top: 24px;
`

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const ImageBox = styled.div`
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.neutralGray100};

  img {
    height: auto;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const ContentText = styled.div``

export const EnterpriseName = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin-bottom: 4px;
`

export const TextWrapper = styled.div`
  display: flex;
`

export const Text = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: #aaa;
  &:first-child:after {
    content: '·';
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    text-align: center;
    line-height: 16px;
  }
`
