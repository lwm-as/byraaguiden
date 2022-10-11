import React, { useMemo } from 'react'
import classNames from 'classnames/bind'

import Link from 'next/link'
import Image from '../../common/Image/Image'

import styles from './CardItem.module.css'

const cx = classNames.bind(styles)

const CardItem = ({ className, cardData }) => {
  const { title, slug, featuredImage, gridPostTitle } = cardData

  const isAgencyType = false

  const bannerImage = useMemo(
    () => (
      <>
        {isAgencyType ? (
          <div className={cx('banner')} style={{ backgroundImage: `url(${featuredImage.sourceUrl})` }} />
        ) : (
          <Image imageData={featuredImage} className={cx('image-wrapper')} />
        )}
      </>
    ),
    [featuredImage]
  )

  return (
    <Link href={`/${slug}`}>
      <a className={cx(className, 'root')}>
        <figure className={cx('row')}>
          <figcaption className={cx('column')}>
            <h3 className={cx('title')}>{gridPostTitle?.title || title}</h3>
          </figcaption>

          {featuredImage ? bannerImage : <div className={cx('image-wrapper')} />}
        </figure>
      </a>
    </Link>
  )
}

export default CardItem
