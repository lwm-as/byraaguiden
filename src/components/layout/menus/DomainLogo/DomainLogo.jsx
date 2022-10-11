import React from 'react'
import classNames from 'classnames/bind'

import Link from 'next/link'
import Image from '../../../common/Image/Image'

import styles from './DomainLogo.module.css'

const cx = classNames.bind(styles)

const imageData = {
  sourceUrl: '/media/logos/logo.svg',
  mediaDetails: {
    width: 120,
    height: 50
  },
  altText: 'byråguiden'
}

const DomainLogo = ({ isHome = false }) => {
  if (isHome) {
    return (
      <span className={cx('logo-container')}>
        <Image imageData={imageData} className={cx('logo')} alt='byråguiden' />
      </span>
    )
  } else {
    return (
      <Link href='/' passHref>
        <a className={cx('logo-container')} href>
          <Image imageData={imageData} className={cx('logo')} alt='byråguiden' />
        </a>
      </Link>
    )
  }
}

export default DomainLogo
