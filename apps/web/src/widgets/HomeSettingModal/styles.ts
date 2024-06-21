import styled from 'styled-components'

export const SettingModal = styled.div`
  position: absolute;
  top: 75px;
  left: 14px;
  width: 190px;
  padding: 14px 8px 8px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 12px 40px 0px rgba(161, 176, 203, 0.3);
  border-radius: 8px;
`

export const SettingListWrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
`

export const SettingListTitle = styled.p`
  padding: 7px 10px;
  ${(props) => props.theme.fonts[11]};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const SettingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const OmsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
