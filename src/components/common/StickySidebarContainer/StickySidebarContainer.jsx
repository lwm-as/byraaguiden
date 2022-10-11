import React from 'react'
import classNames from 'classnames/bind'

import styles from './StickySidebarContainer.module.css'

const cx = classNames.bind(styles)

export default function StickySidebarContainer({ children, className }) {
  return <aside className={cx('root', className)}>{children}</aside>
}
