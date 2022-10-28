import classNames from 'classnames/bind'
import styles from './CustomerReviewBox.module.css'

const cx = classNames.bind(styles)

export default function CustomerReviewBox({ author, text }) {
  console.log('')
  return (
    <div className={cx('root')}>
      <div>
        <p className={cx('txt')}>{text}</p>
      </div>
      <div className={cx('author')}>
        <span>{author}</span>
        <span>Byråguiden user</span>
      </div>
    </div>
  )
}
