import classNames from 'classnames/bind'
import styles from './GridItem.module.css'
import Image from '../../common/Image/Image'
import Link from 'next/link'

const cx = classNames.bind(styles)

export default function GridItem({ post }) {
  return (
    <Link href={`/${post.categories.nodes[1].slug}/${post.slug}`}>
      <a>
        <div className={cx('container')}>
          <div className={cx('img-container')}>
            {post?.featuredImage.node ? (
              <Image className={cx('image')} imageData={post?.featuredImage.node} />
            ) : (
              'No image'
            )}
          </div>
          <div className={cx('content')}>
            <h4>{post?.title}</h4>
            {/*<div>{post?.author.node.firstName && <span>by {post.author.node.firstName}</span>} </div>*/}
          </div>
        </div>
      </a>
    </Link>
  )
}
