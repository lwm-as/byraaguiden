import classNames from 'classnames/bind'
import styles from './SimilarArticles.module.css'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import Image from '../../common/Image/Image'
import { ArticleContext } from '../../../context/ArticleProvider'

const cx = classNames.bind(styles)

export default function SimilarArticles({ post, category, posts }) {
  const [similarArticles, setSimilarArticles] = useState(null)
  const { setDistinctArticles } = useContext(ArticleContext)

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

  useEffect(() => {
    setSimilarArticles(posts.nodes.filter(({ title, slug, featuredImage }) => title !== post.title).slice(0, 4))
  }, [])

  useEffect(async () => {
    if (similarArticles?.length > 0) {
      await setDistinctArticles(similarArticles)
    }
  }, [similarArticles])

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
                        <div className={cx('featured-image-container')}>
                          <Image className={cx('featured-image')} imageData={featuredImage.node} />
                        </div>
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
