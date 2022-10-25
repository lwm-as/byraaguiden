import classNames from 'classnames/bind'
import styles from './CompareItemsModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { BasicTabs } from '../Tabs'
import { useReviewContext } from '../../Cities/ReviewContextProvider'
import Popup from '../../Popup/Popup'

const cx = classNames.bind(styles)

export default function CompareItemsModal({ checked, open, onClose }) {
  const [topFiveProviders, setTopFiveProviders] = useState()
  const { sortedReviews, sortReviews } = useReviewContext()

  //setting top providers for the compare modal
  useEffect(() => {
    sortReviews({ target: { dataset: { value: 'highestScore' } } })
  }, [])

  useEffect(() => {
    setTopFiveProviders(sortedReviews)
  }, [])

  if (!open) return null
  return (
    <>
      <div onClick={onClose} className={cx('root')}>
        <div className={cx('overlay')}>
          <div className={cx('close')}>
            <FontAwesomeIcon size='2x' onClick={onClose} className={cx('icon')} icon={['fal', 'times']} />
          </div>
          <div>
            <span className={cx('title')}>Sammenlign byråene</span>
            <BasicTabs topFiveProviders={topFiveProviders} checked={checked} />
          </div>
        </div>
      </div>
    </>
  )
}
