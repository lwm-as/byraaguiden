import React from 'react'
import classNames from 'classnames/bind'

import Image from '../../../common/Image/Image'

import styles from './Message.module.css'

const cx = classNames.bind(styles)

const Message = ({ className, title, description, imageUrl }) => {
  const imageData = {
    sourceUrl: imageUrl,
    mediaDetails: {
      width: 200,
      height: 200
    },
    altText: ''
  }
  return (
    <span className={cx('root', className)}>
      <div className={cx('section', 'section-left')}>
        <h3 className={cx('title')}>{title}</h3>
        {description && <p className={cx('description')}>{description}</p>}
      </div>
      <div className={cx('section', 'section-right')}>
        <div className={cx('image')}>
          <Image imageData={imageData} />
        </div>
      </div>
    </span>
  )
}

export default Message
