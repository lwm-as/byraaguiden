import React from 'react'
import classNames from 'classnames/bind'
import styles from './EditorialReviewBlock.module.css'
import Image from '../../common/Image/Image'

const cx = classNames.bind(styles)

export default function EditorialReviewBlock({ provider }) {
  const filter = provider?.filter(
    ({ landingpageProvider }) =>
      landingpageProvider.title === 'Babbel' ||
      landingpageProvider.title === 'Rosetta stone' ||
      landingpageProvider.title === 'Busuu'
  )

  // eslint-disable-next-line no-extend-native
  Array.prototype.move = function (from, to) {
    // eslint-disable-next-line react/no-this-in-sfc
    this.splice(to, 0, this.splice(from, 1)[0])
  }
  filter.move(0, 3)
  filter.move(1, 3)

  return (
    <div className={cx('root')}>
      {filter.map(({ landingpageProvider: { title, appInfo } }) => (
        <div className={cx('content')}>
          <div className={cx('img-container')}>
            <Image imageData={appInfo?.appLogo} />
          </div>
          <div className={cx('txt-container')}>
            <span>{title}</span>
            <a href={appInfo?.appReviewPost.slug}>Read review</a>
          </div>
        </div>
      ))}
    </div>
  )
}
