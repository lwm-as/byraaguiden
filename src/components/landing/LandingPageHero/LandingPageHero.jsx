import React from 'react'
import classNames from 'classnames/bind'

import styles from './LandingPageHero.module.css'
import Image from '../../common/Image/Image'

const cx = classNames.bind(styles)

export default function LandingPageHero({
  landingPageHero: { landingpageHeroTitle, landingpageHeroSubtitle, landingpageHeroImage } = {}
}) {
  return (
    <div className={cx('root')}>
      <div className={cx('left-content')}>
        <h1>{landingpageHeroTitle}</h1>
        <p>{landingpageHeroSubtitle}</p>
      </div>
      <div className={cx('right-content')}>
        <Image imageData={landingpageHeroImage} />
      </div>
    </div>
  )
}
