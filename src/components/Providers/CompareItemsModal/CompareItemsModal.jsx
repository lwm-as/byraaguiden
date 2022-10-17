import classNames from 'classnames/bind'
import styles from './CompareItemsModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useOutsideDetecter from '../../../utils/hooks/useOutsideDetecter'
import React, { useRef, useState } from 'react'
import { BasicTabs } from '../Tabs'

const cx = classNames.bind(styles)

export default function CompareItemsModal({ checked, open, onClose }) {
  const wrapperRef = useRef(null)
  useOutsideDetecter(wrapperRef, onClose)

  if (!open) return null
  return (
    <div className={cx('root')}>
      <div ref={wrapperRef} className={cx('overlay')}>
        <div className={cx('close')}>
          <FontAwesomeIcon size='2x' onClick={onClose} className={cx('icon')} icon={['fal', 'times']} />
        </div>
        <div>
          <span className={cx('title')}>Sammenlign byråene</span>
          <BasicTabs checked={checked} />
        </div>
      </div>
    </div>
  )
}
