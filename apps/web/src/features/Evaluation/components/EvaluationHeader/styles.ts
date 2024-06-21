import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  padding: 0 16px;
`

export const Content = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 200px;
  ${(props) => props.theme.fonts[16]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.neutralGray800};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
