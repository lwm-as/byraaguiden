import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image from '../../common/Image/Image'

import styles from './FeaturedArticles.module.css'
import GridItem from '../../article/GridItem/GridItem'
import { ArticleContext } from '../../../context/ArticleProvider'

const cx = classNames.bind(styles)

const FeaturedArticles = ({ post, author, children, posts }) => {
  // this component receives posts from "lignende artikler" and filters them out
  const { distinctArticles } = useContext(ArticleContext)

  if (!distinctArticles) {
    return <div>Loading...</div>
  }

  const ids = new Set(distinctArticles.map(({ id }) => id))
  const removedDuplicates = posts?.nodes?.filter(({ id }) => !ids.has(id) && id !== post.id)

  return (
    <div className={cx('root')}>
      {removedDuplicates?.length > 0 && <h3>{children}</h3>}
      <div className={cx('feature-items')}>
        {removedDuplicates.map(post => {
          return <GridItem author={author} post={post} />
        })}
      </div>
    </div>
  )
}

export default FeaturedArticles
