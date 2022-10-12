import React from 'react'
import classNames from 'classnames/bind'

import Image from '../../common/Image/Image'
import ContentsMenu from '../../common/ContentsMenu/ContentsMenu'
import Wysiwyg from '../../common/Wysiwyg/Wysiwyg'

import styles from './PostContent.module.css'
import PostHeader from '../PostHeader/PostHeader'

const cx = classNames.bind(styles)

const PostContent = ({ marginBreadCrumb, post, postHeaderIsInside, className }) => {
  const { featuredImage, content, customToc } = post
  const isFeatured = !!featuredImage?.node

  return (
    <div className={cx('root')}>
      {postHeaderIsInside && <PostHeader marginBreadCrumb={marginBreadCrumb} post={post} />}
      {isFeatured && (
        <>
          <figure className={cx('image-container')}>
            <Image className={cx('image')} imageData={featuredImage.node} layout />
          </figure>
          <figcaption
            className={cx('image-caption')}
            dangerouslySetInnerHTML={{ __html: featuredImage?.node?.caption }}
          />
        </>
      )}
      {content && (
        <Wysiwyg className={className} isContentsMenu customToc={customToc}>
          {content}
        </Wysiwyg>
      )}
    </div>
  )
}

export default PostContent
