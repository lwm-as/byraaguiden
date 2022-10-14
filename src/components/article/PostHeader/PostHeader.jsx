import React from 'react'
import classNames from 'classnames/bind'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Breadcrumb from '../../common/Breadcrumb/Breadcrumb'

import styles from './PostHeader.module.css'

const cx = classNames.bind(styles)

const PostHeader = ({ author, marginBreadCrumb, fullwidth, post }) => {
  const { title, date, categories } = post

  const dateFormatted = dayjs(date).format('DD. MMM, YYYY')

  return (
    <div className={cx('root', { fullwidth })}>
      <Breadcrumb marginBreadCrumb={marginBreadCrumb} categoryData={categories?.nodes[0]} title={title} />
      <h1 className={cx('title')}>{title}</h1>
      <div className={cx('meta-info')}>
        <div className={cx('meta-container')}>
          <img src={author?.node.avatar.url} alt='' />
          <p>by {author?.node.firstName}</p>
        </div>
        <span className={cx('separator')}>|</span>
        <p className={cx('date')}>
          <span>{dateFormatted}</span>
        </p>
      </div>
    </div>
  )
}

export default PostHeader
