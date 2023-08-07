import { useReviewContext } from '../Cities/ReviewContextProvider'
import ProviderItem from './ProviderItem/ProviderItem'
import styles from './Providers.module.css'

import Popup from '../../components/Popup/Popup'
import React, { useEffect, useState } from 'react'
import Container from '../layout/Container/Container'
import classNames from 'classnames/bind'
import CompareItemsModal from './CompareItemsModal/CompareItemsModal'
import disableScroll from '../../utils/disableScroll'
import Image from '../common/Image/Image'
import Button from '../common/Button/Button'
import useWindowSize from '../../utils/windowSize'
import CircularProgress from '@mui/material/CircularProgress'
import { useStateValue } from '../../context/StateValueProvider'

const cx = classNames.bind(styles)

const Providers = () => {
  const {
    reviews: { sortedReviews, setLoadMore, rest, loading }
  } = useReviewContext()

  const [{ basket }] = useStateValue()

  const [compareItemsModal, setCompareItemsModal] = useState(false)
  const [customerReviewsModal, setCustomerReviewsModal] = useState(false)

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
      {/* {compareItemsModal && (
        <CompareItemsModal compareItemsModal={compareItemsModal} onClose={() => setCompareItemsModal(false)} />
      )} */}
      <div className={cx('root')}>
        {customerReviewsModal && <Popup open={customerReviewsModal} onClose={() => setCustomerReviewsModal(false)} />}
        <div className={cx('col-1')}>
          <Container size='medium' className={cx('providerContainer')}>
            {sortedReviews?.map((item, idx) => {
              return (
                <ProviderItem
                  customReviewModal={() => setCustomerReviewsModal(true)}
                  id={item.provider.id}
                  provider={item}
                  idx={idx}
                  key={item.provider.id}
                />
              )
            })}
            {!isRestEmpty && (
              <div className={cx('buttonContainer')}>
                <div>
                  <Button className={cx('loadMoreButton')} onClick={buttonClick}>
                    Last inn fler
                    {loading ? (
                      <div className={cx('progress-container')}>
                        <CircularProgress className={cx('progress-icon')} />
                      </div>
                    ) : null}
                  </Button>
                </div>
              </div>
            )}
          </Container>
          {/* <div onClick={() => openCompareItems()} className={cx('compare-items')}>
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
              <div className={cx('icon-container')}>{<span>{basket?.length}</span>}</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Providers
