import styled from 'styled-components'

export const Body = styled.ul``

export const Item = styled.li`
  position: relative;
`

export const ItemContainer = styled.div`
  > div > div > div:last-child:not([data-type='docuemnt'], [data-type='question']) {
    pointer-events: none;

    * {
      pointer-events: none;

      &:hover {
        border: none;
        outline: none;
      }
    }
  }

  div[data-type='docuemnt'] {
    > div:last-of-type {
      > div:last-of-type {
        pointer-events: none;
      }
    }
  }

  div[data-type='question'] {
    > div:last-of-type {
      > textarea {
        pointer-events: none;
      }
    }
  }
`
