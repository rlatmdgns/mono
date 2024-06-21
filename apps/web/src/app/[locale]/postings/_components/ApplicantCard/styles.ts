import styled from 'styled-components'

export const Card = styled.div<{
  $isGhosting?: boolean
  $isFail?: boolean
  $isInaccessible?: boolean
}>`
  min-width: 250px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray100};
  background: ${(props) => props.theme.colors.white};

  ${(props) => props.$isFail && `opacity: 0.35;`}
  ${(props) => props.$isGhosting && `opacity: 0;`}
    box-shadow: 0 2px 30px 0 rgba(194, 205, 225, 0.30);

  cursor: ${(props) => props.$isInaccessible && 'not-allowed'};
`

export const Content = styled.div`
  padding: 12px 10px;
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 12px;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  & > em {
    max-width: 66px;
    height: 20px;
    padding-top: 0;
    padding-bottom: 0;
    line-height: 20px;
  }
`

export const Name = styled.span`
  color: ${(props) => props.theme.colors.neutralGray800};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  ${(props) => props.theme.title[14]};
  line-height: 20px;
`

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${(props) => `1px solid ${props.theme.colors.neutralGray100}`};
  margin-top: 12px;
  padding-top: 12px;
`

export const Day = styled.span`
  color: ${(props) => props.theme.colors.neutralGray300};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  ${(props) => props.theme.title[12]};
`

export const MultiScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 12px;
  background: #6e85ff;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(194, 205, 225, 0.5);
  color: #fff;
  font-weight: 500;
  text-overflow: ellipsis;
`

export const Count = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -16px;
  right: -16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffff;
  color: #6e85ff;
`

export const NameWrapper = styled.div`
  overflow: hidden;
  height: 55px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  max-height: 100px;
`
