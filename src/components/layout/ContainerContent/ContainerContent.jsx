import React from 'react'
import classNames from 'classnames/bind'

import styles from './ContainerContent.module.css'

const cx = classNames.bind(styles)

export default function ContainerContent({ children, columns, className, ...props }) {
  return (
    <div className={cx('root', `columns-${columns}`, className)} {...props}>
      {children}
    </div>
  )
}
