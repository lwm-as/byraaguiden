import React from 'react'
import classNames from 'classnames/bind'
import Skeleton from 'react-loading-skeleton'

// import fetchReview from '../../../lib/review'

import Rating from '../Rating/Rating'
import Image from '../../common/Image/Image'

import styles from './GoogleReview.module.css'
import { useCardContext } from '../ReviewCard2/CardProvider'

const cx = classNames.bind(styles)

const GoogleReview = ({ setIsOpen, loading }) => {
  const { providerGoogleRating, providerGoogleReviews } = useCardContext()

  if (loading) return <Skeleton width='200px' />

  if (providerGoogleReviews === 0)
    return (
      <div className={cx('review-container')}>
        <p>Ingen anmeldelser</p>
      </div>
    )

  return (
    <div className={cx('review-container')}>
      <div className={cx('second-container')}>
        {providerGoogleRating > 0 && (
          <div className={cx('review-container-top')}>
            <Image width={15} height={25} alt='Google Logo' src='./src/media/icons/google-icon.svg' />
            <span className={cx('rating-text')}>{parseFloat(providerGoogleRating).toFixed(1)}</span>
          </div>
        )}
        <Rating stars={providerGoogleRating} />
        <p className={cx('review-link')} onClick={() => setIsOpen(true)}>
          {providerGoogleReviews.length} anmeldelser
        </p>
      </div>
    </div>
  )
}

export default GoogleReview

// popularitet = antall anmeldelser i forhold til de andre providerne -- > av alle providers minst og mest .. finn gjennmsnitt
// kundetilfredshet = providerGoogleRating
// totalScore = en utrening av providerGoogleUserRatingsTotal og providerGoogleRating

// const lol = calculateReviews()
