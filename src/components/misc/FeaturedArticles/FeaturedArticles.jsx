import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image from '../../common/Image/Image'

import styles from './FeaturedArticles.module.css'
import GridItem from '../../article/GridItem/GridItem'

const cx = classNames.bind(styles)

const FeaturedArticles = ({ post, author, children, posts }) => {
  const [showTitle, setShowTitle] = useState(true)

  return (
    <div className={cx('root')}>
      {showTitle && <h3>{children}</h3>}
      <div className={cx('feature-items')}>
        {posts.nodes
          .filter(({ title, slug, featuredImage }) => title !== post.title)
          .map(post => {
            return <GridItem author={author} post={post} />
          })}
      </div>
    </div>
  )
}

export default FeaturedArticles
