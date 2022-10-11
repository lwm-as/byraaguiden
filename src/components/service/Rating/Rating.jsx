import React, { useMemo } from 'react'
import classNames from 'classnames/bind'

import times from 'lodash/times'
import constant from 'lodash/constant'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Rating.module.css'

const cx = classNames.bind(styles)

export default function Rating({ stars, className }) {
  const intCount = parseInt(stars, 5)
  const floatCount = parseFloat(stars, 5)
  let starListKey = 0
  const renderedIntStarts = useMemo(
    () =>
      times(intCount, constant('empty')).map(_item => (
        <span key={(starListKey += 1)}>
          <FontAwesomeIcon icon={['fas', 'star']} />
        </span>
      )),
    [intCount]
  )

  return (
    <>
      {intCount > 0 && (
        <div className={cx('root', className)}>
          <img src='/media/icons/google-icon.svg' alt='icon' />
          {renderedIntStarts}
          {floatCount > intCount && (
            <span>
              <FontAwesomeIcon icon={['fas', 'star-half']} />
            </span>
          )}
        </div>
      )}
    </>
  )
}
