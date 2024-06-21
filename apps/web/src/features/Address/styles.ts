import styled from 'styled-components'

export const AddressInputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const InputRow = styled.div<{ $baseAddress?: boolean }>`
  flex: 1 1 100%;
  position: relative;

  input {
    width: 100%;
  }
`

export const BaseAddress = styled.button<{ $isBaseAddress: boolean }>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  ${(props) => props.theme.title[14]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) =>
    props.$isBaseAddress ? props.theme.colors.neutralGray700 : props.theme.colors.neutralGray300};
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  text-align: left;
  border-radius: 8px;
  cursor: pointer;

  svg {
    flex-shrink: 0;
  }
`

export const NoAddress = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
`

export const MapContainer = styled.div`
  width: 100%;
  height: 250px;
  margin: 8px 0;
`
