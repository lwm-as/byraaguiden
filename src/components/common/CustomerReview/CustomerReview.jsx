/* eslint-disable camelcase */
import React from 'react'

import classNames from 'classnames/bind'
import truncate from '../../../utils/truncate'
import styles from './CustomerReview.module.css'
// import Image from '../Image/Image'

const cx = classNames.bind(styles)

function CustomerReview({ currentReview }) {
  const { author_name, profile_photo_url, text, relative_time_description, rating } = currentReview

  return (
    <div className={cx('root')}>
      <div className={cx('column', 'first-column')}>
        <div className={cx('row')}>
          <img src={profile_photo_url} alt='CustomerImg' />
        </div>
        <div className={cx('row', 'author-name')}>
          <p>{author_name}</p>
        </div>
      </div>
      <div className={cx('column', 'review')}>
        <div className={cx('row', 'desc')}>
          <p>{truncate(text, 100) || 'Fant ingen data'}</p>
        </div>
        <div className={cx('row', 'date')}>
          <img src='/media/icons/google-icon.svg' alt='icon' />
          <p>
            {rating}/5 {relative_time_description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CustomerReview
