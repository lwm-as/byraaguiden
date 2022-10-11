import React from 'react'
import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image from '../../common/Image/Image'
import GoogleReview from '../GoogleReview/GoogleReview'

import '../../../utils/fontawesome'

import styles from './ReviewCard.module.css'

const cx = classNames.bind(styles)

const ReviewCard = ({ card, isSpecialUri, loading, setCurrent }) => {
  const {
    placeId,
    providerEmployees,
    providerFounded,
    providerOffices,
    providerText,
    providerName,
    providerLocation,
    providerImage,
    providerGoogleReviews,
    providerGoogleRating,
    providerGoogleUserRatingsTotal
  } = card

  return (
    <div className={cx('provider', { 'special-block': isSpecialUri })}>
      <div className={cx('provider-top')}>
        <Image imageData={providerImage} className={cx('image')} width={10} height={15} />
        <div className={cx('provider-top-right')} key='right-content'>
          <h3 className={cx('title')}>{providerName}</h3>
          {!isSpecialUri && card.providerGoogleRating ? (
            <GoogleReview
              placeId={placeId}
              setCurrent={setCurrent}
              loading={loading}
              totalRating={card?.providerGoogleRating}
              totalReviews={card?.providerGoogleReviews}
            />
          ) : (
            <h1>No available review data</h1>
          )}
        </div>
      </div>
      <div className={cx('provider-content')}>
        <div className={cx('provider-content-left')}>
          {providerText && <div dangerouslySetInnerHTML={{ __html: providerText }} />}
        </div>
        <div className={cx('provider-content-right')}>
          <ul>
            {providerFounded && (
              <li>
                <FontAwesomeIcon icon={['fal', 'flag']} />
                Stiftet i {providerFounded}
              </li>
            )}
            {providerEmployees && (
              <li>
                <FontAwesomeIcon icon={['fal', 'user']} />
                {providerEmployees} ansatte
              </li>
            )}
            {providerOffices && (
              <li>
                <FontAwesomeIcon icon={['fal', 'building']} />
                {providerOffices} {providerOffices > 1 ? 'kontorer' : 'kontor'}
              </li>
            )}
            {providerLocation && (
              <li>
                <FontAwesomeIcon icon={['fal', 'map-marker-alt']} />
                {providerLocation}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default ReviewCard
