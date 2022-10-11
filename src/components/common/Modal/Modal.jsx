import React, { useRef } from 'react'

import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomerReview from '../CustomerReview/CustomerReview'
import useOutsideDetecter from '../../../utils/hooks/useOutsideDetecter'
import styles from './Modal.module.css'

const cx = classNames.bind(styles)

function Modal({ open, onClose, totalReviews }) {
  const wrapperRef = useRef(null)
  useOutsideDetecter(wrapperRef, onClose)

  if (!open) return null
  return (
    <div className={cx('root')}>
      <div ref={wrapperRef} className={cx('overlay')}>
        <div className={cx('close')}>
          <FontAwesomeIcon size='2x' onClick={onClose} className={cx('icon')} icon={['fal', 'times']} />
        </div>
        {totalReviews.map(item => {
          const { text } = item
          return <CustomerReview currentReview={item} />
        })}
      </div>
    </div>
  )
}

export default Modal
