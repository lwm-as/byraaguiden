import React from 'react'
import classNames from 'classnames/bind'
import styles from './TextFieldContainer.module.css'

const cx = classNames.bind(styles)

function TextFieldContainer({ children, className, ...restProps }) {
  return <div className={cx('root', className)}>{children}</div>
}

export default TextFieldContainer
