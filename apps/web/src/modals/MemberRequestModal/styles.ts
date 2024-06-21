import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: unset;
  width: 520px;
  max-height: 90%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  z-index: ${(props) => props.theme.zIndexes.modal};
`

export const BodyWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 32px 0;
`

export const Title = styled.p`
  display: flex;
  gap: 2px;
  white-space: nowrap;
  margin-bottom: 8px;
  align-items: center;
  ${(props) => props.theme.fonts[14]};
  line-height: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};

  > div {
    height: 16px;
  }
`
