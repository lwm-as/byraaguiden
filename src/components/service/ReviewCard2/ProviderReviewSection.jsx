import React from 'react'
import classNames from 'classnames/bind'
import styles from './ReviewCard2.module.css'

export const cx = classNames.bind(styles)

export default function ProviderReviewSection({ children }) {
  return <div className={cx('middle-section')}>{children}</div>
}
