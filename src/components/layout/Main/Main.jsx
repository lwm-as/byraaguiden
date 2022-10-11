import React from 'react'
import classNames from 'classnames/bind'

import styles from './Main.module.css'

const cx = classNames.bind(styles)

const Main = ({ children, white = false }) => <div className={cx('root', white && 'white')}>{children}</div>

export default Main
