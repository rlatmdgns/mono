import { thList } from '@/app/[locale]/settings/member/_container/MemberContainer/memberContainer.constant'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 902px;
  margin: 0 auto;
  padding: 0 20px 20px;
`

export const SearchBar = styled.div`
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
`

export const Search = styled.div`
  position: absolute;
  top: 6px;
  right: 0;
  max-width: 268px;
  width: 100%;
`

export const MemberList = styled.div`
  width: 100%;
  overflow: auto;
`

export const Thead = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
  color: ${(props) => props.theme.colors.neutralGray400};

  > div {
    height: 44px;
    padding: 14px 8px;
  }
`

export const MemberRow = styled.div`
  display: grid;
  padding: 8px;
  position: relative;
  align-items: center;
  grid-template-columns: ${(props) => `140px repeat(${thList.length - 2}, 1fr) 124px`};
`

export const Data = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.theme.fonts[14]};
  overflow: hidden;
`

export const Tbody = styled.div`
  margin-top: 4px;
`
