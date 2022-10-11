import React from 'react'
import classNames from 'classnames/bind'

import Image from '../../common/Image/Image'
import Button from '../../common/Button/Button'

import styles from './ErrorSection.module.css'

const cx = classNames.bind(styles)

const ErrorSection = ({ errorData }) => {
  const { title, subtitle, image } = errorData
  return (
    <div className={cx('root')}>
      <div className={cx('heading')}>
        <h1>404</h1>
        <div className={cx('img-container')}>
          <Image imageData={image} />
        </div>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div>
        <Button link='/'>Home page</Button>
      </div>
    </div>
  )
}

export default ErrorSection
