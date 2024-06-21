import { Tooltip } from '@/shared/ui'
import './icons'
import React from 'react'
import { Quill } from 'react-quill'
import { useTranslations } from 'next-intl'

const Size = Quill.import('attributors/style/size')
const AlignStyle = Quill.import('attributors/style/align')

const Link = Quill.import('formats/link')
const builtInFunc = Link.sanitize

Link.sanitize = function customSanitizeLinkInput(linkValueInput: string) {
  let val = linkValueInput

  if (!/^https?:/.test(val)) {
    val = 'https://' + val
  }
  return builtInFunc.call(this, val)
}

Size.whitelist = ['14px', '20px', '24px', '32px']

Quill.register(Size, true)
Quill.register(AlignStyle, true)

export const MemoEditorToolBar = () => {
  const $t = useTranslations('editor')

  return (
    <div id="toolbar">
      <div className="top-area">
        <Tooltip text={$t('size')} direction="bottom">
          <select className="ql-size">
            <option value="32px">{$t('large_title')}</option>
            <option value="24px">{$t('middle_title')}</option>
            <option value="20px">{$t('cattle_title')}</option>
            <option value="14px" selected>
              {$t('main_text')}
            </option>
          </select>
        </Tooltip>
        <span className="ql-formats">
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-strike" />
          <button className="ql-underline" />
        </span>
        <span className="ql-formats">
          <select className="ql-color" />
          <select className="ql-background" />
        </span>
      </div>
      <div className="bottom-area">
        <span className="ql-formats">
          <button className="ql-list" value="bullet" />
          <button className="ql-list" value="ordered" />
        </span>
        <span className="ql-formats">
          <button className="ql-indent" value="-1" />
          <button className="ql-indent" value="+1" />
        </span>
        <span className="ql-formats">
          <button className="ql-align" value=""></button>
          <button className="ql-align" value="center"></button>
          <button className="ql-align" value="right"></button>
        </span>
        <span className="ql-formats">
          <button className="ql-link" />
        </span>
      </div>
    </div>
  )
}
