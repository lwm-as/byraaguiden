import React from 'react'
import classNames from 'classnames/bind'
import { useCardContext } from './CardProvider'
import styles from './ReviewCard2.module.css'

export const cx = classNames.bind(styles)

export default function CardSubTitle() {
  const { providerLocation } = useCardContext()
  return <p className={cx('subTitle')}>{providerLocation}</p>
}
