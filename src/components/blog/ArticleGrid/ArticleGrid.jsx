import React from 'react'
import classNames from 'classnames/bind'

import ArticleItem from '../ArticleItem/ArticleItem'

import styles from './ArticleGrid.module.css'

const cx = classNames.bind(styles)

const ArticleGrid = ({ heading, className, posts }) => (
  <>
    <h2 className={cx('heading')}>{heading}</h2>
    <div className={cx('root', className)}>
      {posts.map(post => {
        const { id, slug, title, excerpt, featuredImage } = post
        return (
          <ArticleItem
            image={featuredImage}
            key={id}
            title={title}
            excerpt={excerpt}
            slug={slug}
            className={cx('item')}
          />
        )
      })}
    </div>
  </>
)

export default ArticleGrid
