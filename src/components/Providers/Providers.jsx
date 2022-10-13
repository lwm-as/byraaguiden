import { useReviewContext } from '../Cities/ReviewContextProvider'
import uniqid from 'uniqid'
import ProviderHero from './ProviderHero/ProviderHero'
import ProviderItem from './ProviderItem/ProviderItem'
import styles from './Providers.module.css'

import Popup from '../../components/Popup/Popup'
import Backdrop from '../../components/Backdrop/Backdrop'
import React from 'react'
import Container from '../layout/Container/Container'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Providers = () => {
  const { sortedReviews, loading, setLoadMore, rest, modalStatus, showModal, closeModal } = useReviewContext() //denne kan brukes på alle komponenter i provider

  const buttonClick = () => {
    setLoadMore(true)
  }

  const isRestEmpty = rest.length < 1

  return (
    <>
      {modalStatus && <Popup onClick={closeModal} />}
      {modalStatus ? <Backdrop onClick={closeModal} /> : null}
      <Container size='medium' className={cx('providerContainer')}>
        <ProviderHero reviews={sortedReviews} loading={loading} />

        {sortedReviews.map(item => (
          <ProviderItem provider={item} key={uniqid()} showModal={showModal} />
        ))}
        {!isRestEmpty && (
          <div className={cx('buttonContainer')}>
            <button className={cx('loadMoreButton')} onClick={buttonClick}>
              Last inn fler
            </button>
          </div>
        )}
      </Container>
    </>
  )
}

export default Providers
