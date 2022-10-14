import classNames from 'classnames/bind'
import styles from './GridItem.module.css'
import Image from '../../common/Image/Image'
import Link from 'next/link'
import React from 'react'

const cx = classNames.bind(styles)

export default function GridItem({ author = {}, post }) {
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
            {author?.node?.firstName && (
              <div className={cx('meta-container')}>
                <img className={cx('avatar')} src={author?.node?.avatar?.url} alt='' />
                <p>by {author?.node.firstName}</p>
              </div>
            )}
          </div>
        </div>
      </a>
    </Link>
  )
}
