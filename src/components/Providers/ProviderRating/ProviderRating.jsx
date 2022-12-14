import styles from './ProviderRating.module.css'
import GoogleRating from './GoogleRating'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const ProviderRating = ({ vertical, className, rating, totalReviews, popularity, agencyScore }) => {
  const isReviews = totalReviews != 0

  const noReviews = !isReviews

  return (
    <>
      <div className={cx('root', className)}>
        <div className={cx('progressInnerContainer')}>
          <div className={cx('labelContainer', { noReviews })}>
            <label htmlFor='file'>Byrå-score</label>
            {isReviews && <span>{agencyScore}/5</span>}
            {!isReviews && <span>Ingen data</span>}
          </div>
          <progress id='file' value={agencyScore || '0'} max='5'></progress>
        </div>
        <div className={cx('progressInnerContainer')}>
          <div className={cx('labelContainer', { noReviews })}>
            <label htmlFor='file'>Popularitet</label>
            {isReviews && <span>{popularity}/5</span>}
            {!isReviews && <span>Ingen data</span>}
          </div>
          <progress id='file' value={popularity || '0'} max='5'></progress>
        </div>
        <div className={cx('progressInnerContainer')}>
          <div className={cx('labelContainer', { noReviews })}>
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
