import styled from 'styled-components'

export const ScheduleItem = styled.li<{ $isHover: boolean }>`
  display: flex;
  padding: 12px 10px;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  border-radius: 6px;
  background: ${(props) => props.theme.colors.white};
  transition: color 0.3s;
  color: ${(props) =>
    props.$isHover ? props.theme.colors.blue500 : props.theme.colors.neutralGray800};

  &:nth-child(n + 2) {
    margin-top: 10px;
  }

  button {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`

export const Day = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-content: center;
  ${(props) => props.theme.fonts[14]};
`

export const Time = styled.span``
