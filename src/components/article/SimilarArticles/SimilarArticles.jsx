import classNames from 'classnames/bind'
import styles from './SimilarArticles.module.css'
import Link from 'next/link'
import Image from '../../common/Image/Image'
import React, { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

export default function SimilarArticles({ post, category, posts }) {
  const [isSimilarArticlesShown, toggleSimilarArticlesShown] = useState(false)

  const handleScroll = (heroContToTop = 0) => {
    if (window.pageYOffset > heroContToTop) {
      toggleSimilarArticlesShown(true)
    } else if (window.pageYOffset < heroContToTop) {
      toggleSimilarArticlesShown(false)
    }
  }

  useEffect(() => {
    if (window) {
      const heroContToTop = 800
      window.addEventListener('scroll', () => {
        handleScroll(heroContToTop)
      })
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {isSimilarArticlesShown && (
        <div className={cx({ isSimilarArticlesShown })}>
          <span className={cx('lignende-artikler')}>Lignende artikler</span>
          <div className={cx('root')}>
            {posts.nodes
              .filter(({ title, slug, featuredImage }) => title !== post.title)
              .slice(0, 4)
              .map(({ title, slug, featuredImage }) => {
                return (
                  <Link href={`/${category?.slug}/${slug}`}>
                    <a className={cx('item')}>
                      {featuredImage ? (
                        <Image className={cx('featured-image')} imageData={featuredImage?.node} />
                      ) : null}
                      <span className={cx('title')}>{title}</span>
                    </a>
                  </Link>
                )
              })}
          </div>
        </div>
      )}
    </>
  )
}
