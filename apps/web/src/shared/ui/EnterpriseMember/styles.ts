import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 28px);

  > div {
    float: left;
  }
`

export const Info = styled.div`
  width: calc(100% - 38px);
  margin-left: 8px;
`

export const Type = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const Name = styled.span`
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Description = styled.div`
  display: flex;
  width: 100%;
  align-content: center;

  > :first-child {
    max-width: 100%;
    overflow: initial;
  }
`

export const Text = styled.span`
  display: flex;
  gap: 8px;
  overflow: hidden;
  align-items: center;
  max-width: 120px;
  ${(props) => props.theme.fonts[12]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};

  > div {
    width: 100%;
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 6px;

  &:before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.neutralGray300};
  }
`
