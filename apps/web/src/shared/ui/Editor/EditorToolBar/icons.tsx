import ReactQuill from 'react-quill'

export const icons = ReactQuill.Quill.import('ui/icons')
icons['bold'] = `<i class="fa fa-blod" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10.457 7.83824C11.1963 7.32758 11.7146 6.48919 11.7146 5.71178C11.7146 3.98927 10.3808 2.66309 8.66592 2.66309H3.90234V13.3335H9.26804C10.861 13.3335 12.0957 12.0378 12.0957 10.4449C12.0957 9.28637 11.4402 8.29554 10.457 7.83824ZM6.18886 4.56852H8.47538C9.10799 4.56852 9.61864 5.07917 9.61864 5.71178C9.61864 6.34438 9.10799 6.85504 8.47538 6.85504H6.18886V4.56852ZM8.85647 11.4281H6.18886V9.14156H8.85647C9.48907 9.14156 9.99973 9.65221 9.99973 10.2848C9.99973 10.9174 9.48907 11.4281 8.85647 11.4281Z" fill="#333D4B"/>
  </svg>
</i>`
icons['italic'] = `<i class="fa fa-italic" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M10.3333 13C10.3333 13.3682 10.0349 13.6667 9.66667 13.6667H5.66667C5.29848 13.6667 5 13.3682 5 13C5 12.6318 5.29848 12.3333 5.66667 12.3333H6.95107L8.36167 4.33333H7C6.63181 4.33333 6.33333 4.03486 6.33333 3.66667C6.33333 3.29848 6.63181 3 7 3H11C11.3682 3 11.6667 3.29848 11.6667 3.66667C11.6667 4.03486 11.3682 4.33333 11 4.33333H9.7156L8.305 12.3333H9.66667C10.0349 12.3333 10.3333 12.6318 10.3333 13Z" fill="#333D4B"/>
</svg>
</i>`
icons['strike'] = `<i class="fa fa-strike" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.66667 5.33366C8.66667 5.70185 8.36819 6.00033 8 6.00033C7.63181 6.00033 7.33333 5.70185 7.33333 5.33366V4.00033H4C3.63181 4.00033 3.33333 3.70185 3.33333 3.33366C3.33333 2.96547 3.63181 2.66699 4 2.66699H12C12.3682 2.66699 12.6667 2.96547 12.6667 3.33366C12.6667 3.70185 12.3682 4.00033 12 4.00033H8.66667V5.33366ZM8 10.0003C8.36819 10.0003 8.66667 10.2988 8.66667 10.667V12.667C8.66667 13.0352 8.36819 13.3337 8 13.3337C7.63181 13.3337 7.33333 13.0352 7.33333 12.667V10.667C7.33333 10.2988 7.63181 10.0003 8 10.0003ZM2 8.00033C2 7.63214 2.29848 7.33366 2.66667 7.33366H13.3333C13.7015 7.33366 14 7.63214 14 8.00033C14 8.36852 13.7015 8.66699 13.3333 8.66699H2.66667C2.29848 8.66699 2 8.36852 2 8.00033Z" fill="#333D4B"/>
</svg>
</i>`
icons['underline'] = `<i class="fa fa-underline" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M4.6665 2C5.03469 2 5.33317 2.29848 5.33317 2.66667V8C5.33317 9.47273 6.52708 10.6667 7.99984 10.6667C9.47257 10.6667 10.6665 9.47273 10.6665 8V2.66667C10.6665 2.29848 10.965 2 11.3332 2C11.7014 2 11.9998 2.29848 11.9998 2.66667V8C11.9998 10.2091 10.209 12 7.99984 12C5.7907 12 3.99984 10.2091 3.99984 8V2.66667C3.99984 2.29848 4.29831 2 4.6665 2ZM2.6665 14C2.6665 13.6318 2.96498 13.3333 3.33317 13.3333H12.6665C13.0347 13.3333 13.3332 13.6318 13.3332 14C13.3332 14.3682 13.0347 14.6667 12.6665 14.6667H3.33317C2.96498 14.6667 2.6665 14.3682 2.6665 14Z" fill="#333D4B"/>
</svg>
</i>`
icons['code-block'] = `<i class="fa fa-underline" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M15.3416 7.38895C15.5211 7.5685 15.5211 7.85962 15.3416 8.03917L11.424 11.9567C11.1637 12.217 10.7415 12.217 10.4812 11.9567C10.2209 11.6963 10.2209 11.2742 10.4812 11.0139L13.6464 7.84875C13.7208 7.77436 13.7208 7.65376 13.6464 7.57937L10.4812 4.41421C10.2209 4.15386 10.2209 3.73175 10.4812 3.4714C10.7415 3.21106 11.1637 3.21105 11.424 3.4714L15.3416 7.38895ZM3.02031 7.57937C2.94592 7.65376 2.94592 7.77436 3.02031 7.84874L6.18545 11.0139C6.4458 11.2742 6.4458 11.6963 6.18545 11.9567C5.9251 12.217 5.50299 12.217 5.24265 11.9567L1.32511 8.03917C1.14556 7.85961 1.14556 7.5685 1.32511 7.38895L5.24264 3.47141C5.50299 3.21106 5.9251 3.21105 6.18545 3.4714C6.4458 3.73175 6.4458 4.15386 6.18545 4.41421L3.02031 7.57937Z" fill="#333D4B"/>
</svg>
</i>`
icons['color'] = `<i class="fa fa-underline" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M10.1639 9.33333H5.83605L4.93701 11.5809C4.83577 11.834 4.59063 12 4.31802 12C3.84638 12 3.52387 11.5236 3.69904 11.0857L7.08574 2.61899C7.23528 2.24514 7.59736 2 8 2C8.40264 2 8.76472 2.24514 8.91426 2.61898L12.301 11.0857C12.4761 11.5236 12.1536 12 11.682 12C11.4094 12 11.1642 11.834 11.063 11.5809L10.1639 9.33333ZM9.6306 8L8 3.92344L6.36938 8H9.6306ZM2 14C2 13.6318 2.29848 13.3333 2.66667 13.3333H13.3333C13.7015 13.3333 14 13.6318 14 14C14 14.3682 13.7015 14.6667 13.3333 14.6667H2.66667C2.29848 14.6667 2 14.3682 2 14Z" fill="#333D4B"/>
</svg>
</i>`
icons['background'] = `<i class="fa fa-underline" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <rect x="1" y="1" width="14" height="14" rx="2" fill="#333D4B"/>
  <path d="M10.1646 10.3333H5.8367L4.93766 12.5809C4.83642 12.834 4.59128 13 4.31867 13C3.84703 13 3.52453 12.5236 3.69969 12.0857L7.08639 3.61899C7.23593 3.24514 7.59801 3 8.00065 3C8.4033 3 8.76537 3.24514 8.91491 3.61898L12.3016 12.0857C12.4768 12.5236 12.1543 13 11.6826 13C11.41 13 11.1649 12.834 11.0636 12.5809L10.1646 10.3333ZM9.63125 9L8.00065 4.92344L6.37003 9H9.63125Z" fill="white"/>
</svg>
</i>`
icons['list']['bullet'] = `<i class="fa fa-underline" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.33333 3.33301C5.33333 2.96482 5.63181 2.66634 6 2.66634H13.3333C13.7015 2.66634 14 2.96482 14 3.33301C14 3.7012 13.7015 3.99967 13.3333 3.99967H6C5.63181 3.99967 5.33333 3.7012 5.33333 3.33301ZM3 4.33301C2.44771 4.33301 2 3.88529 2 3.33301C2 2.78072 2.44771 2.33301 3 2.33301C3.55229 2.33301 4 2.78072 4 3.33301C4 3.88529 3.55229 4.33301 3 4.33301ZM3 8.99967C2.44771 8.99967 2 8.55194 2 7.99967C2 7.44741 2.44771 6.99967 3 6.99967C3.55229 6.99967 4 7.44741 4 7.99967C4 8.55194 3.55229 8.99967 3 8.99967ZM3 13.5997C2.44771 13.5997 2 13.1519 2 12.5997C2 12.0474 2.44771 11.5997 3 11.5997C3.55229 11.5997 4 12.0474 4 12.5997C4 13.1519 3.55229 13.5997 3 13.5997ZM5.33333 7.99967C5.33333 7.63148 5.63181 7.33301 6 7.33301H13.3333C13.7015 7.33301 14 7.63148 14 7.99967C14 8.36786 13.7015 8.66634 13.3333 8.66634H6C5.63181 8.66634 5.33333 8.36786 5.33333 7.99967ZM5.33333 12.6663C5.33333 12.2982 5.63181 11.9997 6 11.9997H13.3333C13.7015 11.9997 14 12.2982 14 12.6663C14 13.0345 13.7015 13.333 13.3333 13.333H6C5.63181 13.333 5.33333 13.0345 5.33333 12.6663Z" fill="#333D4B"/>
</svg>
</i>`
icons['list']['ordered'] = `<i class="fa fa-underline" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.83333 2.53301C3.83333 2.42255 3.74379 2.33301 3.63333 2.33301H3.14472L2.31474 2.5554C2.2273 2.57883 2.1665 2.65807 2.1665 2.74859V3.36956C2.1665 3.50107 2.29125 3.59679 2.41828 3.56275L2.83318 3.45155L2.83329 5.66634H2.49984C2.2237 5.66634 1.99984 5.8902 1.99984 6.16634C1.99984 6.44248 2.22369 6.66634 2.49984 6.66634H4.1665C4.44265 6.66634 4.6665 6.44248 4.6665 6.16634C4.6665 5.8902 4.44265 5.66634 4.1665 5.66634H3.83333V2.53301ZM6.6665 3.33301C6.6665 2.96482 6.96498 2.66634 7.33317 2.66634H13.3332C13.7014 2.66634 13.9998 2.96482 13.9998 3.33301C13.9998 3.7012 13.7014 3.99967 13.3332 3.99967H7.33317C6.96498 3.99967 6.6665 3.7012 6.6665 3.33301ZM6.6665 7.99967C6.6665 7.63148 6.96498 7.33301 7.33317 7.33301H13.3332C13.7014 7.33301 13.9998 7.63148 13.9998 7.99967C13.9998 8.36786 13.7014 8.66634 13.3332 8.66634H7.33317C6.96498 8.66634 6.6665 8.36786 6.6665 7.99967ZM6.6665 12.6663C6.6665 12.2982 6.96498 11.9997 7.33317 11.9997H13.3332C13.7014 11.9997 13.9998 12.2982 13.9998 12.6663C13.9998 13.0345 13.7014 13.333 13.3332 13.333H7.33317C6.96498 13.333 6.6665 13.0345 6.6665 12.6663ZM1.9165 10.4163C1.9165 9.63394 2.55076 8.99967 3.33317 8.99967C4.11558 8.99967 4.74984 9.63394 4.74984 10.4163C4.74984 10.7401 4.64106 11.0388 4.45815 11.2775L4.45498 11.2816L3.54375 12.333H4.1665C4.44265 12.333 4.6665 12.5569 4.6665 12.833C4.6665 13.1091 4.44265 13.333 4.1665 13.333H2.18374C2.0822 13.333 1.99988 13.2507 1.99983 13.1492L1.99958 12.6124C1.99957 12.595 2.00585 12.5782 2.01726 12.565L3.64764 10.6897C3.71137 10.6165 3.74984 10.5211 3.74984 10.4163C3.74984 10.1862 3.56329 9.99967 3.33317 9.99967C3.11569 9.99967 2.93699 10.1664 2.91815 10.3789C2.91354 10.4929 2.81975 10.583 2.7056 10.583H2.08317C1.99112 10.583 1.9165 10.5084 1.9165 10.4163Z" fill="#333D4B"/>
</svg>
</i>`
icons['align'][''] = `<i class="fa fa-align-left" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M2 3.33366C2 2.96547 2.29848 2.66699 2.66667 2.66699H13.3333C13.7015 2.66699 14 2.96547 14 3.33366C14 3.70185 13.7015 4.00033 13.3333 4.00033H2.66667C2.29848 4.00033 2 3.70185 2 3.33366ZM2 13.3337C2 12.9655 2.29848 12.667 2.66667 12.667H10.6667C11.0349 12.667 11.3333 12.9655 11.3333 13.3337C11.3333 13.7018 11.0349 14.0003 10.6667 14.0003H2.66667C2.29848 14.0003 2 13.7018 2 13.3337ZM2 10.0003C2 9.63213 2.29848 9.33366 2.66667 9.33366H13.3333C13.7015 9.33366 14 9.63213 14 10.0003C14 10.3685 13.7015 10.667 13.3333 10.667H2.66667C2.29848 10.667 2 10.3685 2 10.0003ZM2 6.66699C2 6.2988 2.29848 6.00033 2.66667 6.00033H10.6667C11.0349 6.00033 11.3333 6.2988 11.3333 6.66699C11.3333 7.03518 11.0349 7.33366 10.6667 7.33366H2.66667C2.29848 7.33366 2 7.03518 2 6.66699Z" fill="#333D4B"/>
</svg>
</i>`
icons['align']['center'] = `<i class="fa fa-align-center" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M2 3.33366C2 2.96547 2.29848 2.66699 2.66667 2.66699H13.3333C13.7015 2.66699 14 2.96547 14 3.33366C14 3.70185 13.7015 4.00033 13.3333 4.00033H2.66667C2.29848 4.00033 2 3.70185 2 3.33366ZM3.33333 13.3337C3.33333 12.9655 3.63181 12.667 4 12.667H12C12.3682 12.667 12.6667 12.9655 12.6667 13.3337C12.6667 13.7018 12.3682 14.0003 12 14.0003H4C3.63181 14.0003 3.33333 13.7018 3.33333 13.3337ZM2 10.0003C2 9.63214 2.29848 9.33366 2.66667 9.33366H13.3333C13.7015 9.33366 14 9.63214 14 10.0003C14 10.3685 13.7015 10.667 13.3333 10.667H2.66667C2.29848 10.667 2 10.3685 2 10.0003ZM3.33333 6.66699C3.33333 6.2988 3.63181 6.00033 4 6.00033H12C12.3682 6.00033 12.6667 6.2988 12.6667 6.66699C12.6667 7.03518 12.3682 7.33366 12 7.33366H4C3.63181 7.33366 3.33333 7.03518 3.33333 6.66699Z" fill="#333D4B"/>
</svg>
</i>`
icons['align']['right'] = `<i class="fa fa-align-right" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M2 3.33366C2 2.96547 2.29848 2.66699 2.66667 2.66699H13.3333C13.7015 2.66699 14 2.96547 14 3.33366C14 3.70185 13.7015 4.00033 13.3333 4.00033H2.66667C2.29848 4.00033 2 3.70185 2 3.33366ZM4.66667 13.3337C4.66667 12.9655 4.96514 12.667 5.33333 12.667H13.3333C13.7015 12.667 14 12.9655 14 13.3337C14 13.7018 13.7015 14.0003 13.3333 14.0003H5.33333C4.96514 14.0003 4.66667 13.7018 4.66667 13.3337ZM2 10.0003C2 9.63213 2.29848 9.33366 2.66667 9.33366H13.3333C13.7015 9.33366 14 9.63213 14 10.0003C14 10.3685 13.7015 10.667 13.3333 10.667H2.66667C2.29848 10.667 2 10.3685 2 10.0003ZM4.66667 6.66699C4.66667 6.2988 4.96514 6.00033 5.33333 6.00033H13.3333C13.7015 6.00033 14 6.2988 14 6.66699C14 7.03518 13.7015 7.33366 13.3333 7.33366H5.33333C4.96514 7.33366 4.66667 7.03518 4.66667 6.66699Z" fill="#333D4B"/>
</svg>
</i>`
icons['align']['justify'] = `<i class="fa fa-align-right" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M2 3.33366C2 2.96547 2.29848 2.66699 2.66667 2.66699H13.3333C13.7015 2.66699 14 2.96547 14 3.33366C14 3.70185 13.7015 4.00033 13.3333 4.00033H2.66667C2.29848 4.00033 2 3.70185 2 3.33366ZM4.66667 13.3337C4.66667 12.9655 4.96514 12.667 5.33333 12.667H13.3333C13.7015 12.667 14 12.9655 14 13.3337C14 13.7018 13.7015 14.0003 13.3333 14.0003H5.33333C4.96514 14.0003 4.66667 13.7018 4.66667 13.3337ZM2 10.0003C2 9.63213 2.29848 9.33366 2.66667 9.33366H13.3333C13.7015 9.33366 14 9.63213 14 10.0003C14 10.3685 13.7015 10.667 13.3333 10.667H2.66667C2.29848 10.667 2 10.3685 2 10.0003ZM4.66667 6.66699C4.66667 6.2988 4.96514 6.00033 5.33333 6.00033H13.3333C13.7015 6.00033 14 6.2988 14 6.66699C14 7.03518 13.7015 7.33366 13.3333 7.33366H5.33333C4.96514 7.33366 4.66667 7.03518 4.66667 6.66699Z" fill="#333D4B"/>
</svg>
</i>`
icons['image'] = `<i class="fa fa-align-right" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.33333 7.40033L4.38382 6.34984C4.54003 6.19363 4.7933 6.19363 4.94951 6.34984L8.33333 9.73367L10.3838 7.68318C10.54 7.52697 10.7933 7.52697 10.9495 7.68318L12.6667 9.40033V3.33333H3.33333V7.40033ZM2.66667 2H13.3333C13.7015 2 14 2.29848 14 2.66667V13.3333C14 13.7015 13.7015 14 13.3333 14H2.66667C2.29848 14 2 13.7015 2 13.3333V2.66667C2 2.29848 2.29848 2 2.66667 2ZM10.3333 6.66667C9.78107 6.66667 9.33333 6.21895 9.33333 5.66667C9.33333 5.11438 9.78107 4.66667 10.3333 4.66667C10.8856 4.66667 11.3333 5.11438 11.3333 5.66667C11.3333 6.21895 10.8856 6.66667 10.3333 6.66667Z" fill="#333D4B"/>
</svg>
</i>`
icons['link'] = `<i class="fa fa-align-right" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M12.2428 9.41407C11.9824 9.67442 11.5603 9.67443 11.3 9.41409C11.0396 9.15374 11.0396 8.7316 11.3 8.47124L11.7714 7.99987C12.8128 6.95847 12.8128 5.27004 11.7714 4.22864C10.73 3.18724 9.04152 3.18724 8.00012 4.22864L7.52872 4.70004C7.26837 4.96039 6.84626 4.96039 6.58591 4.70004C6.32556 4.4397 6.32556 4.01758 6.58591 3.75723L7.05732 3.28583C8.61938 1.72373 11.1521 1.72373 12.7142 3.28583C14.2763 4.84793 14.2763 7.3806 12.7142 8.94267L12.2428 9.41407ZM9.41432 11.2997C9.67467 11.5601 9.67467 11.9822 9.41432 12.2425L8.94292 12.7139C7.38085 14.276 4.84817 14.276 3.28607 12.7139C1.72398 11.1518 1.72398 8.61913 3.28607 7.05707L3.75748 6.58566C4.01783 6.32531 4.43994 6.32531 4.70029 6.58566C4.96064 6.84601 4.96064 7.26812 4.70029 7.52847L4.22888 7.99987C3.18748 9.04127 3.18748 10.7297 4.22888 11.7711C5.27029 12.8125 6.95872 12.8125 8.00012 11.7711L8.47152 11.2997C8.73187 11.0394 9.15397 11.0394 9.41432 11.2997ZM9.41431 5.64285C9.67466 5.3825 10.0968 5.3825 10.3571 5.64286C10.6175 5.90321 10.6175 6.32531 10.3571 6.58566L6.58594 10.3569C6.32557 10.6173 5.90344 10.6173 5.64308 10.3569C5.38274 10.0965 5.38274 9.67441 5.6431 9.41406L9.41431 5.64285Z" fill="#333D4B"/>
</svg>
</i>`
