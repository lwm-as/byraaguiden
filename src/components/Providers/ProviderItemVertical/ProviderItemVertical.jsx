import classNames from 'classnames/bind'
import styles from './ProviderItemVertical.module.css'
import GoogleRating from '../ProviderRating/GoogleRating'
import Button from '../../common/Button/Button'
import ProviderRating from '../ProviderRating/ProviderRating'
import Image from '../../common/Image/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useCompareItems } from '../compareitems'
import useWindowSize from '../../../utils/windowSize'

const cx = classNames.bind(styles)

export default function ProviderItemVertical({ idx, setCustomerReviewModal, customReviewModal, provider }) {
  // const { removeItemFromCompareModal } = useCompareItems()
  const { width } = useWindowSize()
  const isMobile = width <= 1000
  const {
    provider: {
      providersInfo: {
        name,
        logo,
        providerButton,
        contact,
        websiteLink,
        focusareas,
        description,
        placeid,
        establishedYear,
        employeeCount,
        city: { name: city }
      }
    },
    rating,
    totalReviews,
    popularity,
    agencyScore
  } = provider

  const isCtaButton = providerButton === 'cta'
  const isVisitButton = providerButton === 'visit'

  /** Will be implemented soon****/

  // function handleRemoval() {
  //   removeItemFromCompareModal(idx)
  // }

  return (
    <div className={cx('root')}>
      {/*<div className={cx('close')}>*/}
      {/*  <FontAwesomeIcon*/}
      {/*    size='2x'*/}
      {/*    onClick={() => handleRemoval()}*/}
      {/*    color='#727070'*/}
      {/*    className={cx('icon')}*/}
      {/*    icon={['fal', 'times']}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className={cx('first-section')}>
        <span className={cx('name')}>{name}</span>
        <div className={cx('image-container', { isMobile })}>
          {logo.sourceUrl && (
            <Image
              imageData={{
                sourceUrl: logo.sourceUrl,
                mediaDetails: {
                  width: 100,
                  height: 80
                }
              }}
            />
          )}
          <GoogleRating
            setCustomerReviewModal={setCustomerReviewModal}
            customReviewModal={customReviewModal}
            stars={rating}
            totalReviews={totalReviews}
            placeid={placeid}
          />
        </div>
        {isVisitButton ? (
          <Button className={cx('btn')} size='large' link={websiteLink}>
            Besøk nettsted
          </Button>
        ) : (
          !isMobile && (
            <Button disabled={true} size='large' className={cx('transparent')}>
              -
            </Button>
          )
        )}
        {isCtaButton && (
          <Button className={cx({ isMobile }, 'btn')} size='large' link={`/tilbud?name=${name}&contact=${contact}`}>
            Besøk nettsted
          </Button>
        )}
      </div>
      <div className={cx('middle-section')}>
        <p>{description}</p>
        <div className={cx('provider-rating')}>
          <ProviderRating
            className='vertical'
            rating={rating}
            totalReviews={totalReviews}
            popularity={popularity}
            agencyScore={agencyScore}
            placeid={placeid}
          />
        </div>
      </div>
      <div className={cx('last-section')}>
        <span className={cx('focus-labelStyles')}>Fokus områder</span>
        <div className={cx('focus-container')}>
          {focusareas.map(focus => (
            <div className={cx('focus-box')} key={focus.name}>
              <span className={cx('focus-name')}>{focus.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={cx('footer-desc')}>
        <div className={cx('icon-outer')}>
          <div className={cx('icon-container')}>
            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} color='#7E7E7E' />
            <p>{city}</p>
          </div>
          <div className={cx('icon-container')}>
            <FontAwesomeIcon icon={['fas', 'user-friends']} color='#7E7E7E' />
            <p>Ansatte: {employeeCount}</p>
          </div>{' '}
          <div className={cx('icon-container')}>
            <FontAwesomeIcon icon={['fas', 'flag']} color='#7E7E7E' />
            <p>Etablert: {establishedYear}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
