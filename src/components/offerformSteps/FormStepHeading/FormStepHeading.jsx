import classNames from 'classnames/bind'

import React from 'react'
import styles from './FormStepHeading.module.css'

const cx = classNames.bind(styles)

export function FormStepHeading({ text }) {
  return (
    <div className={cx('root')}>
      <span>{text}</span>
    </div>
  )
}
