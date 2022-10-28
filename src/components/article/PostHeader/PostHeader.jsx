import React from 'react'
import classNames from 'classnames/bind'

import Breadcrumb from '../../common/Breadcrumb/Breadcrumb'

import styles from './PostHeader.module.css'

import dayjs from 'dayjs'

const cx = classNames.bind(styles)

const PostHeader = ({ modifiedGmt, noBreadCrumb, author, marginBreadCrumb, fullwidth, post }) => {
  const { title, categories } = post

  const formattedDate = dayjs(modifiedGmt).locale('de').format('DD. MMM, YYYY')

  return (
    <div className={cx('root', { fullwidth })}>
      {!noBreadCrumb && (
        <Breadcrumb marginBreadCrumb={marginBreadCrumb} categoryData={categories?.nodes[0]} title={title} />
      )}
      <h1 className={cx('title')}>{title}</h1>
      <div className={cx('meta-info')}>
        <div className={cx('meta-container')}>
          <img src={author?.node.avatar.url} alt='' />
          <p>av {author?.node.firstName || author?.node.name.charAt(0).toUpperCase() + author?.node.name.slice(1)}</p>
        </div>
        <span className={cx('separator')}>|</span>
        <p className={cx('date')}>
          <span>{formattedDate}</span>
        </p>
      </div>
    </div>
  )
}

export default PostHeader
