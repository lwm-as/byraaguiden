import styles from './GoogleRating.module.css'
import IconContainer from '../../../components/IconContainer/IconContainer'
import React, { useState } from 'react'
import { useReviewContext } from '../../Cities/ReviewContextProvider'

const GoogleRating = ({ stars, totalReviews, showModal, placeid }) => {
  const { setCurrentPlaceId } = useReviewContext()
  const calculateStars = stars => {
    switch (true) {
      case stars > 4.7:
        return ['full', 'full', 'full', 'full', 'full']
      case stars > 4.2 && stars < 4.8:
        return ['full', 'full', 'full', 'full', 'half']
      case stars > 3.7 && stars < 4.3:
        return ['full', 'full', 'full', 'full', 'empty']
      case stars > 3.2 && stars < 4.8:
        return ['full', 'full', 'full', 'half', 'empty']
      case stars > 2.7 && stars < 3.3:
        return ['full', 'full', 'full', 'empty', 'empty']
      case stars > 2.2 && stars < 2.8:
        return ['full', 'full', 'half', 'empty', 'empty']
      case stars > 1.7 && stars < 2.3:
        return ['full', 'full', 'empty', 'empty', 'empty']
      case stars > 1.2 && stars < 1.8:
        return ['full', 'half', 'empty', 'empty', 'empty']
      default:
        return ['full', 'empty', 'empty', 'empty', 'empty']
    }
  }

  const starCount = calculateStars(stars)

  const readMore = () => {
    setCurrentPlaceId(placeid)
    showModal()
  }

  const starIcons = {
    full: 'star-full.svg',
    half: 'star-half.svg',
    empty: 'star-empty.svg'
  }

  if (stars === 0) {
    return (
      <div className={styles.googleReviewContainer}>
        <p>Ingen anmeldelser</p>
      </div>
    )
  }

  return (
    <div className={styles.googleReviewContainer}>
      <div className={styles.starContainer}>
        <IconContainer src={'google-icon.svg'} width={14} height={14} />
        <p className={styles.starCount}>{parseFloat(stars).toFixed(1)}</p>

        {starCount.map((star, idx) => (
          <IconContainer src={starIcons[star]} key={idx} width={18} height={18}></IconContainer>
        ))}
      </div>
      <div className={styles.totalReviewsContainer}>
        {totalReviews > 0 && (
          <p className={styles.reviewLink} onClick={readMore}>
            {totalReviews} anmeldelse{totalReviews > 1 && 'r'}
          </p>
        )}
      </div>
    </div>
  )
}

export default GoogleRating
