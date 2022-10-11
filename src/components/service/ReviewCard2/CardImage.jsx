import React from 'react'
import classNames from 'classnames/bind'
import Image from '../../common/Image/Image'
import { useCardContext } from './CardProvider'
import styles from './ReviewCard2.module.css'

export const cx = classNames.bind(styles)

export default function CardImage() {
  const { providerImage } = useCardContext()
  return (
    <>
      <Image imageData={providerImage} className={cx('image')} width={15} height={15} />
    </>
  )
}
