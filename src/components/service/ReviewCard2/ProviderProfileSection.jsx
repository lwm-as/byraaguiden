import React from 'react'
import classNames from 'classnames/bind'
import styles from './ReviewCard2.module.css'

export const cx = classNames.bind(styles)

export default function ProviderProfileSection({ children }) {
  return (
    <div className={cx('left-section')}>
      <div className={cx('profile-container')}>{children}</div>
    </div>
  )
}
