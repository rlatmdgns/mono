import styled from 'styled-components'

export const GuideItem = styled.li`
  display: flex;
  margin-bottom: 10px;
`

export const GuideButton = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 268px;
  height: 56px;
  padding: 0 24px;
  background: rgb(255, 255, 255);
  border-radius: 56px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 6px 20px;

  img {
    background: ${(props) => props.theme.colors.neutralGray400};
    border-radius: 50%;
    padding: 4px;
  }

  a {
    display: flex !important;
    width: 100%;
    height: 100%;
    gap: 10px;
    align-items: center;

    img {
      padding: 0;
    }
  }
`
