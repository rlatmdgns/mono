import styled from 'styled-components'

export const Wrapper = styled.li`
  padding: 0 40px;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns:
    minmax(320px, 1fr) minmax(77px, 180px) minmax(100px, 230px)
    minmax(100px, 260px) minmax(100px, 260px) 60px;
  align-items: center;
  justify-content: left;
  height: 56px;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  color: ${(props) => props.theme.colors.neutralGray700};
  ${(props) => props.theme.title[14]};
  padding-left: 8px;
`

export const Title = styled.div`
  width: 90%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
`

export const Count = styled.div`
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

export const Member = styled.div`
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

export const Date = styled.div`
  color: ${(props) => props.theme.colors.neutralGray500};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`
