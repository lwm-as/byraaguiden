import { useReviewContext } from '../Cities/ReviewContextProvider'
import ProviderItem from './ProviderItem/ProviderItem'
import styles from './Providers.module.css'

import Popup from '../../components/Popup/Popup'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Container from '../layout/Container/Container'
import classNames from 'classnames/bind'
import { useCompareItems } from './compareitems'
import CompareItemsModal from './CompareItemsModal/CompareItemsModal'
import disableScroll from '../../utils/disableScroll'
import Image from '../common/Image/Image'
import Button from '../common/Button/Button'
import useWindowSize from '../../utils/windowSize'
import CircularProgress from '@mui/material/CircularProgress'
import _ from 'lodash'

const cx = classNames.bind(styles)

const Providers = () => {
  const { sortedReviews, setLoadMore, rest, loading } = useReviewContext()
  const { checked, toggleChecked, removeItemFromCompareModal } = useCompareItems()

  const [compareItemsModal, setCompareItemsModal] = useState(false)
  const [customerReviewsModal, setCustomerReviewsModal] = useState(false)
  const { width } = useWindowSize()
  const isMobile = width <= 1000
  const [state, setState] = useState([])

  const isRestEmpty = rest.length < 1

  const buttonClick = () => {
    setLoadMore(true)
  }

  function openCompareItems() {
    setCompareItemsModal(true)
  }

  useEffect(() => {
    if (compareItemsModal) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [compareItemsModal])

  if (loading) {
    return (
      <div className={cx('progress-container')}>
        <CircularProgress className={cx('progress-icon')} />
      </div>
    )
  }

  return (
    <>
      {compareItemsModal && (
        <CompareItemsModal
          compareItemsModal={compareItemsModal}
          checked={checked}
          onClose={() => setCompareItemsModal(false)}
        />
      )}
      <div className={cx('root')}>
        {customerReviewsModal && <Popup open={customerReviewsModal} onClose={() => setCustomerReviewsModal(false)} />}
        <div className={cx('col-1')}>
          <Container size='medium' className={cx('providerContainer')}>
            {sortedReviews?.map((item, idx) => {
              return (
                <ProviderItem
                  isMobile={isMobile}
                  customReviewModal={() => setCustomerReviewsModal(true)}
                  checked={checked}
                  toggleChecked={toggleChecked}
                  idx={idx}
                  provider={item}
                  // key={item.id}
                />
              )
            })}
            {!isRestEmpty && (
              <div className={cx('buttonContainer')}>
                <div>
                  <Button className={cx('loadMoreButton')} onClick={buttonClick}>
                    Last inn fler
                  </Button>
                </div>
              </div>
            )}
          </Container>
          <div onClick={() => openCompareItems()} className={cx('compare-items')}>
            <div className={cx('inner-compare')}>
              <Image
                imageData={{
                  sourceUrl: '/media/icons/compare-icon.svg',
                  mediaDetails: {
                    width: 35,
                    height: 35
                  }
                }}
              />
              <div className={cx('icon-container')}>
                <span>{checked.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Providers
