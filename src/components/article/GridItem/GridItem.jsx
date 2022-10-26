import classNames from 'classnames/bind'
import styles from './GridItem.module.css'
import Image from '../../common/Image/Image'
import Link from 'next/link'
import React from 'react'
import useWindowSize from '../../../utils/windowSize'

const cx = classNames.bind(styles)

export default function GridItem({ noMarginOnFirstItem, author = {}, post }) {
  const { width } = useWindowSize()
  const isMobileWidth = width <= 768

  const margin = isMobileWidth && !noMarginOnFirstItem
  return (
    <Link href={`/${post.categories.nodes[1].slug}/${post.slug}`}>
      <a className={cx({ margin }, { isMobileWidth })}>
        <div className={cx('container')}>
          <div className={cx('img-container')}>
            {post?.featuredImage.node ? (
              <Image className={cx('image')} imageData={post?.featuredImage.node} />
            ) : (
              'No image'
            )}
          </div>
          <div className={cx('content')}>
            <div className={cx('title')}>
              <h4>{post?.title}</h4>
            </div>
            <div className={cx('meta-container')}>
              <img className={cx('avatar')} src={author?.node?.avatar?.url} alt='' />
              <p>
                by {author?.node?.firstName || author?.node?.name.charAt(0).toUpperCase() + author?.node?.name.slice(1)}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
