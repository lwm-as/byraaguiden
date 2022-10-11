import React from 'react'
import classNames from 'classnames/bind'

import styles from './Loader.module.css'

const cx = classNames.bind(styles)

// Loader from https://loading.io/css/
const Loader = ({ className }) => (
  <div aria-hidden='true' className={cx('lds-ellipsis', className)}>
    <div className={cx('child')} />
    <div className={cx('child')} />
    <div className={cx('child')} />
    <div className={cx('child')} />
  </div>
)

export default Loader
