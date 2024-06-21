import styled from 'styled-components'

export const InterviewFooter = styled.footer`
  display: flex;
  width: 100%;
  padding: 18px 16px;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
  background: ${(props) => props.theme.colors.white};
`
