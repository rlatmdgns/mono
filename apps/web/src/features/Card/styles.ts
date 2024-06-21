import styled from 'styled-components'

export const AddCard = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-bottom: 20px;
  padding: 24px 0;
  border-radius: 6px;
  ${(props) => props.theme.fonts[14]};
  background: ${(props) => props.theme.colors.neutralGray100};
`

export const CardWrap = styled.div``

export const ModifyCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20px;
  margin-bottom: 20px;
  padding: 24px 20px;
  border-radius: 6px;
  ${(props) => props.theme.fonts[14]};
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};

  button {
    background: ${(props) => props.theme.colors.white};
  }
`

export const ModifyText = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`
