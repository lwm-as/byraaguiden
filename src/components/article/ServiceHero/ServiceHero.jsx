import classNames from 'classnames/bind'
import styles from './ServiceHero.module.css'
import Image from '../../common/Image/Image'
import excerpts from 'excerpts'
import { format, parseISO } from 'date-fns'

const cx = classNames.bind(styles)

export default function ServiceHero({ category }) {
  let date = category.posts.nodes[0]?.modifiedGmt
  let formattedDate = date && format(parseISO(date), 'dd.MM.yyyy')

  return (
    <div className={cx('root')}>
      <div>
        <Image className={cx('image')} imageData={category.posts.nodes[0]?.featuredImage.node} />
      </div>
      <div className={cx('content')}>
        <h3>{category.posts.nodes[0]?.title || 'No data'}</h3>
        <span>{formattedDate || 'No data'}</span>
        <p>{excerpts(category.posts.nodes[0]?.excerpt) || 'No data'}</p>
      </div>
    </div>
  )
}
