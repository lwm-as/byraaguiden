import { useReviewContext } from '../Cities/ReviewContextProvider'
import uniqid from 'uniqid'
import ProviderHero from './ProviderHero/ProviderHero'
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

const cx = classNames.bind(styles)

const Providers = () => {
  const { sortedReviews, loading, setLoadMore, rest, modalStatus, showModal, closeModal } = useReviewContext() //denne kan brukes på alle komponenter i provider

  const buttonClick = () => {
    setLoadMore(true)
  }

  const { checked, toggleChecked } = useCompareItems()

  const isRestEmpty = rest.length < 1

  const [compareItemsModal, setCompareItemsModal] = useState(false)

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
        {modalStatus && <Popup onClick={closeModal} />}
        {modalStatus ? <Backdrop onClick={closeModal} /> : null}
        <Container size='medium' className={cx('providerContainer')}>
          <ProviderHero reviews={sortedReviews} loading={loading} />

          {sortedReviews.map((item, idx) => (
            <ProviderItem
              checked={checked}
              toggleChecked={toggleChecked}
              idx={idx}
              provider={item}
              key={uniqid()}
              showModal={showModal}
            />
          ))}
          {!isRestEmpty && (
            <div className={cx('buttonContainer')}>
              <button className={cx('loadMoreButton')} onClick={buttonClick}>
                Last inn fler
              </button>
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
    </>
  )
}

export default Providers
