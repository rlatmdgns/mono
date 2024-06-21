import styled from 'styled-components'
import { IMAGES } from '@/shared/constants'

export const CheckBoxIcon = styled.i<{ $checked?: boolean }>`
  display: block;
  min-width: 20px;
  height: 20px;
  background-image: ${(props) =>
    props.$checked ? `url(${IMAGES.CHECKBOX_CHECKED})` : `url(${IMAGES.CHECKBOX_DEFAULT})`};

  &:hover {
    background-image: ${(props) =>
      props.$checked ? `url(${IMAGES.CHECKBOX_CHECKED})` : `url(${IMAGES.CHECKBOX_HOVER})`};
  }
`
