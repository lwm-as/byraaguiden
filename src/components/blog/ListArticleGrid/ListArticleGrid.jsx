import classNames from 'classnames/bind'
import React from 'react'
import styles from './ListArticleGrid.module.css'
import ListArticleItem from '../ListArticleItem/ListArticleItem'

const cx = classNames.bind(styles)

export default function ListArticleGrid({ customTitle, heading, className, posts }) {
  return (
    <>
      <h2 className={cx('heading')}>{heading}</h2>
      <div className={cx('root', className)}>
        {posts.map(post => {
          const { id, slug, title, excerpt, featuredImage } = post

          return (
            <ListArticleItem
              customTitle={customTitle}
              image={featuredImage}
              key={id}
              title={title}
              excerpt={excerpt}
              slug={slug}
            />
          )
        })}
      </div>
    </>
  )
}
