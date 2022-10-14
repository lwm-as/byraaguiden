import React from 'react'
import classNames from 'classnames/bind'

import Image from '../../common/Image/Image'
import Wysiwyg from '../../common/Wysiwyg/Wysiwyg'

import styles from './PostContent.module.css'
import PostHeader from '../PostHeader/PostHeader'
import excerpts from 'excerpts'
import ContentsMenuArrowStyle from '../../common/ContentsMenuArrowStyle/ContentsMenuArrowStyle'

const cx = classNames.bind(styles)

const PostContent = ({ author, excerpt, marginBreadCrumb, post, postHeaderIsInside, className }) => {
  const { featuredImage, content, customToc } = post
  const isFeatured = !!featuredImage?.node

  return (
    <div className={cx('root')}>
      {postHeaderIsInside && <PostHeader author={author} marginBreadCrumb={marginBreadCrumb} post={post} />}
      {excerpt && <p className={cx('excerpt')}>{excerpts(excerpt)}</p>}
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
      <ContentsMenuArrowStyle />
      {content && (
        <Wysiwyg className={className} isContentsMenu customToc={customToc}>
          {content}
        </Wysiwyg>
      )}
    </div>
  )
}

export default PostContent
