import React from 'react'
import classNames from 'classnames/bind'

import styles from './Container.module.css'

const cx = classNames.bind(styles)

const Container = ({ children, className, size, padding }) => (
  <div className={cx('root', className, size, padding)}>{children}</div>
)

export default Container
