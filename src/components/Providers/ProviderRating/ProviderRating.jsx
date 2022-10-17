import styles from './ProviderRating.module.css'
import GoogleRating from './GoogleRating'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const ProviderRating = ({ className, rating, totalReviews, popularity, agencyScore, showModal, placeid }) => {
  const isReviews = totalReviews != 0

  return (
    <>
      {/*<GoogleRating stars={rating} totalReviews={totalReviews} showModal={showModal} placeid={placeid} />*/}
      <div className={cx('root', className)}>
        <div className={cx('progressInnerContainer')}>
          <div className={cx('labelContainer')}>
            <label htmlFor='file'>Byrå-score</label>
            {isReviews && <span>{agencyScore}/5</span>}
            {!isReviews && <span>Ingen data</span>}
          </div>
          <progress id='file' value={agencyScore || '0'} max='5'></progress>
        </div>
        <div className={cx('progressInnerContainer')}>
          <div className={cx('labelContainer')}>
            <label htmlFor='file'>Popularitet</label>
            {isReviews && <span>{popularity}/5</span>}
            {!isReviews && <span>Ingen data</span>}
          </div>
          <progress id='file' value={popularity || '0'} max='5'></progress>
        </div>
        <div className={cx('progressInnerContainer')}>
          <div className={cx('labelContainer')}>
            <label htmlFor='file'>Kundetilfredshet</label>
            {isReviews && <span>{rating}/5</span>}
            {!isReviews && <span>Ingen data</span>}
          </div>
          <progress id='file' value={rating} max='5'></progress>
        </div>
      </div>
    </>
  )
}

export default ProviderRating
