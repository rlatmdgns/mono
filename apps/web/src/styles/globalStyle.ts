import { IMAGES } from '@/shared/constants'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-datepicker/dist/react-datepicker.css'

export const GlobalStyle = createGlobalStyle<{ locale: string }>`
    ${normalize}
    :root {
        color-scheme: light only;
    }

    html
    body {
        overflow: hidden;
    }

    * {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, ul, li, p, button {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    /* width */

    ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }

    /* Track */

    ::-webkit-scrollbar-track {
        background: #F2F4F6;
    }

    ::-webkit-scrollbar-thumb {
        background-color: hsla(0, 0%, 42%, 0.49);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background: #D1D6DB;
        border-radius: 4px;
    }

    /* Handle on hover */

    ::-webkit-scrollbar-thumb:hover {
        background: #B0B8C1;
    }

    input[type=password]::-ms-clear {
        display: none;
        width: 0;
        height: 0;
    }

    input[type=password]::-ms-reveal {
        display: none;
        width: 0;
        height: 0;
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }


    /* Loading */
    #loading {
        visibility: hidden;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.55);
        z-index: 99999;
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }

    #loading.is-loading {
        visibility: visible;
        opacity: 1;
    }


    #loading.is-loading span {
        padding: 10px 10px 10px 40px;
        position: absolute;
        bottom: 20px;
        left: 50%;
        background: #fff url(${IMAGES.THREE_DOTS_HORIZONTAL_GRAY}) no-repeat 10px center/ 24px;
        border-radius: 8px;
        font-size: 14px;
        transform: translate(-50%, -50%);
    }

    .react-datepicker__input-container {
        input {
            padding: 12px;
            width: 100%;
            height: 40px;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: -0.01em;
            font-weight: 500;
            color: #2b3c56;
            background-color: #ffffff;
            border: 1px solid #e5e8eb;
            border-radius: 6px;

            &::placeholder {
                color: ${(props) => props.theme.colors.neutralGray400};
            }
        }

        .react-datepicker-popper {
            z-index: 2;
        }
    }

    .react-datepicker {
        display: flex;
        flex-direction: column;
        padding: 0;
        border-color: ${(props) => props.theme.colors.neutralGray100};
    }

    .react-datepicker__month-container {
        padding: 8px;
    }

    .react-datepicker__header {
        margin: 0 auto;
        padding: 0;
        background-color: ${(props) => props.theme.colors.white};
        ${(props) => props.theme.fonts[14]};
        font-weight: ${(props) => props.theme.fontWeights.medium};
        border: 0;
        color: ${(props) => props.theme.colors.neutralGray800};
    }

    .react-datepicker-wrapper {
        width: 100%;
    }

    .react-datepicker__tab-loop {
        position: absolute;
    }

    .react-datepicker-popper {
        z-index: 2;
    }

    .react-datepicker__triangle {
        display: none;
    }

    .react-datepicker__view-calendar-icon {
        > svg {
            position: absolute;
            top: 50%;
            right: 12px;
            transform: translateY(-50%);
            z-index: 1;
        }
    }

    .react-datepicker__calendar-icon {
        top: 50%;
        right: 3px;
        transform: translate(0, -50%);
        z-index: ${(props) => props.theme.zIndexes.modalDropdown};
    }

    // Date Picker Time
    .react-datepicker__time-container {
        padding: 8px;
    }

    .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
        padding: 0 !important;
    }

    .react-datepicker__month {
        margin: 9px 0 0;
        border: none;
    }

    .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
        font-family: 'Pretandard';
        width: 28px;
        height: 28px;
        margin: 0;
        font-size: 11px;
        line-height: 30px;
        ${(props) => props.theme.fontWeights.medium};
    }

    .react-datepicker__day--disabled {
        opacity: 0.25 !important;
    }

    .react-datepicker__day {
        color: ${(props) => props.theme.colors.neutralGray700};
    }

    .react-datepicker__time-container {
        width: 190px;
        border-radius: 8px;
        background: ${(props) => props.theme.colors.white};
        box-shadow: -6px 0px 26px 0px rgba(230, 238, 244, 0.80);
    }

    .react-datepicker__time-container .react-datepicker-time__header {
        height: 40px;
        padding: 0 12px;
        line-height: 40px;
        border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
    }

    .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
        width: 100%;
        margin: 2px 0 0 0;
        padding: 12px 0;
        ${(props) => props.theme.fonts[14]};
    }

    .react-datepicker-time__header {
        padding: 0;
        font-weight: ${(props) => props.theme.fontWeights.medium};
        text-align: left;
        color: ${(props) => props.theme.colors.neutralGray400};
        ${(props) => props.theme.fonts[14]};
    }

    .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
        ${(props) => props.theme.fonts[14]}
        border-radius: 6px;
        font-weight: ${(props) => props.theme.fontWeights.medium};
        background: ${(props) => props.theme.colors.neutralGray100};
        color: ${(props) => props.theme.colors.neutralGray700};
    }

    .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
        display: flex;
        align-items: center;
        justify-content: start;
        height: 40px;
        line-height: 40px;
        ${(props) => props.theme.fonts[14]};
        color: ${(props) => props.theme.colors.neutralGray700};
    }

    .react-datepicker__close-icon {
        display: none;
    }

    .react-datepicker__day--keyboard-selected,
    .react-datepicker__day--keyboard-selected:hover {
        background: transparent;
    }

    // Date Picker Date 

    .react-datepicker__day {
        border-radius: 6px !important;
        font-weight: ${(props) => props.theme.fontWeights.medium};
    }

    .react-datepicker__day-names {
        margin-top: 0;
        padding: 0;
        border-top: 1px solid ${(props) => props.theme.colors.neutralGray100};
        border-bottom: 1px solid ${(props) => props.theme.colors.neutralGray100};
    }

    .react-datepicker__day-names .react-datepicker__day-name {
        color: ${(props) => props.theme.colors.neutralGray800};

        &:first-child {
            color: #ff7067;
        }

        &:last-child {
            color: #2275f8;
        }
    }

    .react-datepicker__day--disabled {
        opacity: 0.8;
    }

    .react-datepicker__current-month {
        padding: 9px;
        height: 40px;
        font-family: 'Pretandard';
        ${(props) => props.theme.fonts[14]};
        font-weight: ${(props) => props.theme.fontWeights.semiBold};
        color: ${(props) => props.theme.colors.neutralGray800};
    }

    .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range, .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
        color: ${(props) => props.theme.colors.white};
        background: ${(props) => props.theme.colors.blue500} !important;
        border-radius: 6px;
    }

    .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range, .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
        color: #fff;
    }

    .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
        opacity: 0.3;
    }

    .react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {
        all: unset;
        width: 16px;
        height: 16px;
        transform: rotate(0);
        border: none;
    }
    
    .react-datepicker__navigation-icon {
        width: 16px;
        height: 16px;
        top: 1px;
        
        > svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    // Toast
    :root {
        --toastify-toast-width: auto;
    }

    .react-datepicker-popper {
        z-index: ${(props) => props.theme.zIndexes.content};
        border-radius: 8px;
    }


    .react-datepicker__navigation {
        top: 9px;
    }

    .react-datepicker__day--today {
        text-align: center;
        letter-spacing: -0.01em;
        border-radius: 12px;
        box-sizing: border-box;
        color: #000;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--selected,
    .react-datepicker__year-text--in-selecting-range,
    .react-datepicker__year-text--in-range {
        text-align: center;
        letter-spacing: -0.01em;
        color: #ffffff;
        background: #022c6f;
        border-radius: 12px;
        box-sizing: border-box;
    }

    .react-datepicker__close-icon::after {
        background: #468eff;
    }
    
    // OMS Editor
    .oms_editor {
      width:100%;
    }
    .oms_editor > textarea, .oms_editor input {
      width: 100%;
      padding:0;
      border:none;
    }

    .oms_editor > textarea:hover, .oms_editor > textarea:focus, .oms_editor input:hover, .oms_editor input:focus{
      border:none;
      box-shadow: none;
    }
    
    .oms_editor_title input, .oms_editor_title input::placeholder{
      /* 22_SemiBold */
      font-size: 22px;
      font-weight: 600;
      line-height: 32px; 
      letter-spacing: -0.22px;
    }
    
    .oms_editor_description textarea, .oms_editor_description textarea::placeholder{
      /* 15_Medium */
      font-size: 15px;
      font-weight: 500;
      line-height: 22px; /* 146.667% */
      letter-spacing: -0.15px;
    }
    
    .oms_editor .memo-editor{
      position: relative;
      height: 400px;
    }
`
