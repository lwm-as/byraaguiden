import React from 'react'
import classNames from 'classnames/bind'
import styles from './OfferFormContainer.module.css'

const cx = classNames.bind(styles)

export default function OfferFormContainer({ children }) {
  return <div className={cx('content')}>{children}</div>
}
