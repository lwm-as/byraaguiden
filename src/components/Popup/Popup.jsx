import { useReviewContext } from '../Cities/ReviewContextProvider'
import styles from './Popup.module.css'
import classNames from 'classnames/bind'
import ReactModal from 'react-modal'
import useWindowSize from '../../utils/windowSize'
import { useEffect } from 'react'
import disableScroll from '../../utils/disableScroll'

const cx = classNames.bind(styles)

function Popup({ open, onClose }) {
  const { currentReviews } = useReviewContext()
  const EMPTY_REVIEW_PLACEHOLDER = 'Brukeren har ikke skrevet en anmeldelse'

  const { width } = useWindowSize()
  const isMobile = width <= 1000

  const customStyles = {
    content: {
      position: 'fixed',
      padding: '1rem',
      width: isMobile ? '92%' : '60%',
      height: '80%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  useEffect(() => {
    if (open) {
      disableScroll.on()
    } else {
      disableScroll.off()
    }
  }, [open])

  return (
    <ReactModal style={customStyles} isOpen onRequestClose={onClose}>
      <div className={cx('parent')}>
        <div className={cx('button-container')}>
          <button onClick={onClose} className={cx('popupLayout_closePopup')}>
            ×
          </button>
        </div>
        {currentReviews === undefined
          ? null
          : currentReviews.reviews.map(review => {
              return (
                <div key={review.author_name} className={cx('popupLayout_content_root')}>
                  <div className={cx('popoutLayout_content_root_comment_container')}>
                    <div className={cx('comment_container_author')}>
                      <img src={review.profile_photo_url} />
                      <p className={cx('author_name')}>{review.author_name}</p>
                    </div>
                    <div className={cx('comment_container_content')}>
                      <p className={cx('comment_container_content_actual')}>
                        {review?.text || EMPTY_REVIEW_PLACEHOLDER}
                      </p>
                      <div className={cx('popupLayout_comment_item')}>
                        <img src='/media/icons/google-icon.svg' alt='' />
                        <p className={cx('rating_text')}>{review.rating}/5</p>
                        <p className={cx('rating_text2')}>{review.relative_time_description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}{' '}
      </div>
    </ReactModal>
  )
}

export default Popup
