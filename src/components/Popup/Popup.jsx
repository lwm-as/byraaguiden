import { useReviewContext } from '../Cities/ReviewContextProvider'
import styles from './Popup.module.css'
import { useRef } from 'react'
import useOutsideDetecter from '../../utils/hooks/useOutsideDetecter'

function Popup({ onClick }) {
  const { currentReviews } = useReviewContext()
  const wrapperRef = useRef(null)
  useOutsideDetecter(wrapperRef, onClick)

  const EMPTY_REVIEW_PLACEHOLDER = 'Brukeren har ikke skrevet en anmeldelse'

  return (
    <div ref={wrapperRef} className={styles.popupLayout}>
      <div className={styles.popoutLayout_content}>
        {currentReviews === undefined
          ? null
          : currentReviews.reviews.map(review => {
              return (
                <div key={review.author_name} className={styles.popupLayout_content_root}>
                  <div className={styles.popoutLayout_content_root_comment_container}>
                    <div className={styles.comment_container_author}>
                      <img src={review.profile_photo_url} />
                      <p className={styles.author_name}>{review.author_name}</p>
                    </div>
                    <div className={styles.comment_container_content}>
                      <p className={styles.comment_container_content_actual}>
                        {review?.text || EMPTY_REVIEW_PLACEHOLDER}
                      </p>
                      <div className={styles.popupLayout_comment_item}>
                        <img src='/media/icons/google-icon.svg' alt='' />
                        <p className={styles.rating_text}>{review.rating}/5</p>
                        <p className={styles.rating_text2}>{review.relative_time_description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}{' '}
        <button onClick={onClick} className={styles.popupLayout_closePopup}>
          ×
        </button>
      </div>
    </div>
  )
}

export default Popup
