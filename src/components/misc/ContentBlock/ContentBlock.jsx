import React from 'react'
import classNames from 'classnames/bind'

import { ContentsMenuStateProvider } from '../../../context/contentsMenuContext'

import Wysiwyg from '../../common/Wysiwyg/Wysiwyg'
import ContentsMenu from '../../common/ContentsMenu/ContentsMenu'

import styles from './ContentBlock.module.css'

const cx = classNames.bind(styles)

const ContentBlock = ({ title, content, customToc, isContentsMenu = false, children }) => (
  <div className={cx('root')}>
    <ContentsMenuStateProvider>
      {isContentsMenu && <ContentsMenu />}
      {title && <h2 className={cx('title')}>{title}</h2>}
      {content && (
        <Wysiwyg isContentsMenu={isContentsMenu} customToc={customToc}>
          {content}
        </Wysiwyg>
      )}
      {children && <div className={cx('content')}>{children}</div>}
    </ContentsMenuStateProvider>
  </div>
)

export default ContentBlock
