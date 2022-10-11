import React from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './OurRecommendation.module.css'
import Button from '../../../common/Button/Button'
import Image from '../../../common/Image/Image'

const cx = classNames.bind(styles)

export default function OurRecommendation({
  winnerHeading,
  appVisitUrl,
  appRating,
  appName,
  appLogo,
  appFeatures,
  isMobile
}) {
  return (
    <>
      <div className={cx('root')}>
        <div className={cx('container', { isMobile })}>
          <div className={cx('heading-container')}>
            {winnerHeading ? (
              <div className={cx('winner-container')}>
                {appName?.length >= 11 ? (
                  <span>
                    Winner: <br />
                    {appName}{' '}
                  </span>
                ) : (
                  <span>Winner: {appName}</span>
                )}
              </div>
            ) : (
              <div className={cx('img-container')}>
                <Image imageData={appLogo} />
              </div>
            )}
            <div className={cx('rating')}>
              <FontAwesomeIcon color='gold' icon={['fas', 'star']} />
              <span>{appRating}</span>
            </div>
          </div>
          <div className={cx('list-container')}>
            <ul className={cx('list')}>
              {appFeatures?.map(({ appFeature }) => (
                <li>{appFeature}</li>
              ))}
            </ul>
          </div>
          <div className={cx('cta-btn')}>
            <Button link={appVisitUrl} className={cx('btn')}>
              Visit {appName}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
