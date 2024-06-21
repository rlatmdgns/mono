import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow-y: auto;
  width: 560px;
  margin: 0 auto;
`
export const Title = styled.p<{ $isRequired?: boolean }>`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 4px;
  ${(props) => props.theme.fonts[12]};

  &:after {
    display: ${(props) => (props.$isRequired ? 'inline' : 'none')};
    content: '*';
    color: ${(props) => props.theme.colors.red500};
  }
`
