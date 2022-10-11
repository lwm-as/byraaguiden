import React from 'react'
import classNames from 'classnames/bind'

import NextImage from 'next/image'

import styles from './Image.module.css'

const cx = classNames.bind(styles)

const Image = ({ className, imageData, layout = false }) => {
  if (!imageData) {
    return null
  }

  if (layout) {
    return (
      <div className={cx('root', className)}>
        <NextImage
          src={imageData.sourceUrl}
          alt={imageData.altText}
          className={cx('image')}
          layout='fill'
          objectFit='cover'
          priority
        />
      </div>
    )
  }
  return (
    <div className={cx('root', className)}>
      <NextImage
        src={imageData.sourceUrl}
        width={!layout && imageData.mediaDetails.width}
        height={!layout && imageData.mediaDetails.height}
        alt={imageData.altText}
        className={cx('image')}
        priority
      />
    </div>
  )
}

export default Image
