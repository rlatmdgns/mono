import React from 'react'
import './icons'
import { Quill } from 'react-quill'
import { Tooltip } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const AlignStyle = Quill.import('attributors/style/align')
const Size = Quill.import('attributors/style/size')

Size.whitelist = ['14px', '20px', '24px', '32px']

Quill.register(AlignStyle, true)
Quill.register(Size, true)

export const EditorToolBar = () => {
  const $t = useTranslations('editor')

  return (
    <div id="toolbar">
      <Tooltip text={$t('size')}>
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
      <span className="ql-formats">
        <button className="ql-list" value="bullet" />
        <button className="ql-list" value="ordered" />
      </span>
      <span className="ql-formats">
        <select className="ql-align">
          <option />
          <option value="right" />
          <option value="center" />
        </select>
      </span>
      <span className="ql-formats">
        <button className="ql-image" />
        <button className="ql-link" />
      </span>
    </div>
  )
}
