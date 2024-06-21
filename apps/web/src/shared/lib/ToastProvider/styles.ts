import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

export const Container = styled(ToastContainer)`
  .Toastify__toast {
    align-items: center;
    min-height: 56px;
    background: ${(props) => props.theme.colors.white};
    box-shadow: 0 4px 40px 0 rgba(161, 176, 203, 0.28);
    border-radius: 9px;
    padding: 12px 12px 12px 16px;
    box-sizing: border-box;
  }

  .Toastify__toast-icon {
    width: 24px;
    margin: 0 12px 0 0;
  }

  .Toastify__toast-body {
    padding: 0 12px 0 0;
    margin: 0;

    & > div:last-of-type {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;

      button {
        flex-shrink: 0;
      }
    }
  }
`
