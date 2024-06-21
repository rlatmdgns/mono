import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 16px 4rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Title = styled.div`
  ${(props) => props.theme.fonts[22]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: #3f4254;
  padding-top: 120px;
  margin-bottom: 30px;
`

export const Article = styled.article`
  margin-bottom: 5rem;
  a {
    display: inline-block;
    margin: 0 4px;
    text-decoration: underline;
    color: ${(props) => props.theme.colors.blue600};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`

export const ArticleHeader = styled.h2`
  ${(props) => props.theme.fonts[18]}
  margin-bottom:14px;
`

export const PolicyHeader = styled.h3`
  ${(props) => props.theme.fonts[16]}
  margin-bottom:10px;
`

export const Policies = styled.ul`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
`

export const Policy = styled.li`
  &:nth-child(n + 2) {
    margin-top: 25px;
  }
`

export const List = styled.ul``

export const Item = styled.li``

export const Table = styled.table`
  min-width: 600px;
  border: 1px solid #e4e6ef;
  border-collapse: collapse;
  text-align: center;
  margin: 8px 0 16px;
  ${(props) => props.theme.fonts[14]}

  th,
  td {
    min-width: 120px;
    border: 1px solid #e4e6ef;
    padding: 4px 8px;
  }

  th {
    padding: 4px 0;
  }

  tr {
    font-weight: 500;
  }
`

export const Desc = styled.p`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.regular};
`

export const Indent = styled.div<{
  $step?: number
}>`
  margin-top: 10px;
  padding-left: ${(props) => (!props.$step ? '6px' : `${props.$step * 6}px`)};
`
