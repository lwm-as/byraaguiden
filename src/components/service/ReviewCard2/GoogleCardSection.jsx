import React from 'react'
import classNames from 'classnames/bind'
import styles from './ReviewCard2.module.css'
import { useCardContext } from './CardProvider'

export const cx = classNames.bind(styles)

export default function GoogleCardSection({ children, isSpecialUri }) {
  const { providerGoogleRating } = useCardContext()

  return (
    <div className={cx('right-section')}>
      {!isSpecialUri && providerGoogleRating ? (
        children
      ) : (
        <div className={cx('placeholder-review-container', !providerGoogleRating && 'addMinHeight')}>
          <div className={cx('second-container')}>
            <p className={cx('review-link')}>Ingen anmeldelser</p>
          </div>
        </div>
      )}
    </div>
  )
}
