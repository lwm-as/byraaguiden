import React from 'react'
import classNames from 'classnames/bind'

import styles from './PageLoader.module.css'

const cx = classNames.bind(styles)

// Loader source: https://icons8.com/cssload/en/spinners/5
const PageLoader = ({ className }) => <div align='center' className={cx('root', className)} />

export default PageLoader
