import styles from './GoogleRating.module.css'
import IconContainer from '../../../components/IconContainer/IconContainer'
import React from 'react'
import { useReviewContext } from '../../Cities/ReviewContextProvider'
import classNames from 'classnames/bind'
import { calculateStars } from '../../../utils/calculateStart'

const cx = classNames.bind(styles)

const GoogleRating = ({ customReviewModal = () => {}, stars, totalReviews, placeid }) => {
  const { setCurrentPlaceId } = useReviewContext()

  const starCount = calculateStars(stars)

  const readMore = () => {
    setCurrentPlaceId(placeid)
    customReviewModal()
  }

  const starIcons = {
    full: 'star-full.svg',
    half: 'star-half.svg',
    empty: 'star-empty.svg'
  }

  if (stars === 0) {
    return (
      <div className={styles.root}>
        <p>Ingen anmeldelser</p>
      </div>
    )
  }

  return (
    <div className={cx('root')}>
      <div className={cx('starContainer')}>
        <IconContainer src={'google-icon.svg'} width={14} height={14} />
        <p className={styles.starCount}>{parseFloat(stars).toFixed(1)}</p>

        {starCount.map((star, idx) => (
          <IconContainer src={starIcons[star]} key={idx} width={18} height={18}></IconContainer>
        ))}
      </div>
      <div className={cx('totalReviewsContainer')}>
        {totalReviews > 0 && (
          <p className={cx('reviewLink')} onClick={readMore}>
            {totalReviews} anmeldelse{totalReviews > 1 && 'r'}
          </p>
        )}
      </div>
    </div>
  )
}

export default GoogleRating
