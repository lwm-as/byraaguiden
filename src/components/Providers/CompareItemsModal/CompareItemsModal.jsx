import classNames from 'classnames/bind'
import styles from './CompareItemsModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { createContext, useEffect, useRef, useState } from 'react'
import { BasicTabs } from '../Tabs'
import ReactModal from 'react-modal'
import { useReviewContext } from '../../Cities/ReviewContextProvider'
import Popup from '../../Popup/Popup'
import disableScroll from '../../../utils/disableScroll'

const cx = classNames.bind(styles)

export default function CompareItemsModal({ compareItemsModal, checked, onClose }) {
  const [topFiveProviders, setTopFiveProviders] = useState()
  const { sortedReviews, sortReviews } = useReviewContext()
  const [customerReviewModal, setCustomerReviewModal] = useState(false)

  //setting top providers for the compare modal
  useEffect(() => {
    sortReviews({ target: { dataset: { value: 'highestScore' } } })
  }, [])

  useEffect(() => {
    setTopFiveProviders(sortedReviews)
  }, [])

  const customStyles = {
    content: {
      display: 'flex',
      position: 'fixed',
      overflowY: 'scroll',
      padding: '1rem',
      width: '100%',
      inset: 'unset',
      height: '90%'
    }
  }

  useEffect(() => {
    if (compareItemsModal) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [compareItemsModal])

  return (
    <ReactModal style={customStyles} isOpen onRequestClose={onClose}>
      <div style={{ width: '100%' }}>
        {customerReviewModal && <Popup open={customerReviewModal} onClose={() => setCustomerReviewModal(false)} />}

        <div style={{ width: '100%' }}>
          <BasicTabs
            onClose={onClose}
            setCustomerReviewModal={setCustomerReviewModal}
            topFiveProviders={topFiveProviders}
            checked={checked}
          />
        </div>
      </div>
    </ReactModal>
  )
}
