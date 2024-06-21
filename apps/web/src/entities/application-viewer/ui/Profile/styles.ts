import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 138px;
  height: 174px;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.neutralGray100};

  img {
    height: fit-content !important;
    object-fit: contain;
  }
`

export const Empty = styled.div`
  width: 138px;
  height: 174px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.neutralGray100};
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 4px;
`

export const EmptyText = styled.span`
  color: ${(props) => props.theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[11]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-top: 4px;
`
