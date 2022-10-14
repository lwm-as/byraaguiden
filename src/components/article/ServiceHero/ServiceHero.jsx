import classNames from 'classnames/bind'
import styles from './ServiceHero.module.css'
import Image from '../../common/Image/Image'
import excerpts from 'excerpts'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'

const cx = classNames.bind(styles)

export default function ServiceHero({ category }) {
  let date = category.posts.nodes[0]?.modifiedGmt
  let formattedDate = date && format(parseISO(date), 'dd.MM.yyyy')

  return (
    <Link href={`/${category.name}/${category.posts.nodes[0]?.slug}`}>
      <a className={cx('root')}>
        <div>
          <Image className={cx('image')} imageData={category.posts.nodes[0]?.featuredImage.node} />
        </div>
        <div className={cx('content')}>
          {category.posts.nodes.length > 0 && <h3>{category.posts.nodes[0]?.title}</h3>}
          <span>{formattedDate || 'No post found'}</span>
          {category.posts.nodes.length > 0 && <p>{excerpts(category.posts.nodes[0]?.excerpt)}</p>}
        </div>
      </a>
    </Link>
  )
}
