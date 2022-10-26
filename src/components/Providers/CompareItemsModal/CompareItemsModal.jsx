import classNames from 'classnames/bind'
import styles from './CompareItemsModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { createContext, useEffect, useRef, useState } from 'react'
import { BasicTabs } from '../Tabs'
import ReactModal from 'react-modal'
import { useReviewContext } from '../../Cities/ReviewContextProvider'
import useOutsideDetecter from '../../../utils/hooks/useOutsideDetecter'
import Popup from '../../Popup/Popup'

const cx = classNames.bind(styles)

export default function CompareItemsModal({ checked, onClose }) {
  const [topFiveProviders, setTopFiveProviders] = useState()
  const { sortedReviews, sortReviews } = useReviewContext()
  const [customerReviewModal, setCustomerReviewModal] = useState(false)

  // const wrapperRef = useRef(null)
  // useOutsideDetecter(wrapperRef, onClose)

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

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <ReactModal style={customStyles} isOpen onRequestClose={onClose}>
      <div>
        {customerReviewModal && <Popup open={customerReviewModal} onClose={() => setCustomerReviewModal(false)} />}

        <div>
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
