import React from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind'

import styles from './RelevantPosts.module.css'

const cx = classNames.bind(styles)

const RelevantPosts = ({ post }) => {
  const { title, categories, customRA } = post
  const { posts } = categories.nodes[0]
  const { hasra: isCustomRA, customArticles } = customRA

  const filteredPosts = posts.nodes.filter(postObject => postObject.title !== title)

  return (
    <div className={cx('root')}>
      <h3 className={cx('title')}>Relevante articles</h3>
      <ul className={cx('item-list')}>
        {isCustomRA
          ? customArticles.map(({ customArticle: { title: postTitle, slug } }) => (
              <li className={cx('item')} key={slug}>
                <span>
                  <Link href={`/${slug}`} passHref>
                    <a>
                      <span>{postTitle}</span>
                    </a>
                  </Link>
                </span>
              </li>
            ))
          : filteredPosts.map(({ title: postTitle, slug }) => (
              <li className={cx('item')} key={slug}>
                <Link href={`/${slug}`} passHref>
                  <span>
                    <a>
                      <span>{postTitle}</span>
                    </a>
                  </span>
                </Link>
              </li>
            ))}
      </ul>
    </div>
  )
}

export default RelevantPosts
