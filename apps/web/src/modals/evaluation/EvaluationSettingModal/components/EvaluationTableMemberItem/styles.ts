import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0 12px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray50};
  }

  &:first-of-type {
    border-radius: 10px 10px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 10px 10px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Name = styled.p`
  ${(props) => props.theme.title[14]};
  color: ${(props) => props.theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`
