import React from 'react'
import classNames from 'classnames/bind'
import dayjs from 'dayjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Breadcrumb from '../../common/Breadcrumb/Breadcrumb'

import styles from './PostHeader.module.css'

const cx = classNames.bind(styles)

const PostHeader = ({ fullwidth, post }) => {
  const { title, date, categories } = post

  const dateFormatted = dayjs(date).format('DD. MMM, YYYY')

  return (
    <div className={cx('root', { fullwidth })}>
      <Breadcrumb categoryData={categories?.nodes[0]} title={title} />
      <h1 className={cx('title')}>{title}</h1>
      <p className={cx('date')}>
        <FontAwesomeIcon className={cx('date-icon')} icon={['fal', 'clock']} />
        <span>Updated: {dateFormatted}</span>
      </p>
    </div>
  )
}

export default PostHeader
