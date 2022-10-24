import { useReviewContext } from '../Cities/ReviewContextProvider'
import uniqid from 'uniqid'
import ProviderItem from './ProviderItem/ProviderItem'
import styles from './Providers.module.css'

import Popup from '../../components/Popup/Popup'
import Backdrop from '../../components/Backdrop/Backdrop'
import React, { useEffect, useState } from 'react'
import Container from '../layout/Container/Container'
import classNames from 'classnames/bind'
import { useCompareItems } from './compareitems'
import CompareItemsModal from './CompareItemsModal/CompareItemsModal'
import disableScroll from '../../utils/disableScroll'
import Image from '../common/Image/Image'
import Button from '../common/Button/Button'
import useWindowSize from '../../utils/windowSize'

const cx = classNames.bind(styles)

const Providers = () => {
  const { sortedReviews, loading, setLoadMore, rest } = useReviewContext()
  const { checked, toggleChecked } = useCompareItems()
  const [compareItemsModal, setCompareItemsModal] = useState(false)
  const [customerReviewsModal, setCustomerReviewsModal] = useState(false)

  const { width } = useWindowSize()
  const isMobile = width <= 1000

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

  return (
    <>
      <CompareItemsModal checked={checked} onClose={() => setCompareItemsModal(false)} open={compareItemsModal} />
      <div className={cx('root')}>
        {customerReviewsModal && <Popup onClick={() => setCustomerReviewsModal(false)} />}
        {customerReviewsModal && <Backdrop onClick={() => setCustomerReviewsModal(false)} />}
        <div className={cx('col-1')}>
          <Container size='medium' className={cx('providerContainer')}>
            {sortedReviews.map((item, idx) => (
              <ProviderItem
                isMobile={isMobile}
                customReviewModal={() => setCustomerReviewsModal(true)}
                checked={checked}
                toggleChecked={toggleChecked}
                idx={idx}
                provider={item}
                key={uniqid()}
              />
            ))}
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
