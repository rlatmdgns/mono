import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Toolbar = styled.div<{ $visible: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 40px 0 rgba(161, 176, 203, 0.2);
  transform: ${(props) =>
    props.$visible ? 'translateY(-100%) translateY(-20px)' : 'translateY(0)'};
  transition: 0.2s ease-in;
`

export const CountBox = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.black};
`

export const Count = styled.em`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 2px 6px;
  border-radius: 3px;
  color: ${(props) => props.theme.colors.blue500};
  background: ${(props) => props.theme.colors.blue100};
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-style: normal;
`
