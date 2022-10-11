import React from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from '../../common/Image/Image'

import styles from './RelevantArticles.module.css'
import Button from '../../common/Button/Button'

const cx = classNames.bind(styles)

const RelevantArticles = ({ post }) => {
  const { title, categories, customRA } = post
  const { posts, slug } = categories.nodes[0]
  const { hasra: isCustomRA, customArticles } = customRA

  const filteredPosts = posts.nodes.filter(postObject => postObject.title !== title).slice(0, 3)

  console.log(filteredPosts)

  return (
    <div className={cx('root')}>
      <h3 className={cx('title')}>Read more</h3>
      <div className={cx('feature-items')}>
        {isCustomRA
          ? customArticles.map(({ customArticle: { title: postTitle, slug, excerpt, featuredImage } }) => {
              let excerptstr = excerpt

              if (excerptstr.length > 110) {
                excerptstr = `${excerptstr.substring(3, 110)}...`
              }
              return (
                <Link key={slug} href={`/${slug}`} passHref>
                  <a className={cx('featured-item')}>
                    <div className={cx('img-container')}>
                      {featuredImage ? (
                        <Image className={cx('featured-image')} imageData={featuredImage?.node} layout />
                      ) : null}
                    </div>
                    <h3>{postTitle}</h3>
                    <p>{excerptstr}</p>
                    <div className={cx('read-more')}>
                      <p>
                        Les mer <FontAwesomeIcon icon={['fal', 'arrow-right']} color='#5899E2' />
                      </p>
                    </div>
                  </a>
                </Link>
              )
            })
          : // eslint-disable-next-line no-shadow
            filteredPosts.map(({ title: postTitle, slug, excerpt, featuredImage }) => {
              let excerptstr = excerpt

              if (excerptstr.length > 110) {
                excerptstr = `${excerptstr.substring(3, 110)}...`
              }
              return (
                <Link key={slug} href={`/${slug}`} passHref>
                  <a className={cx('featured-item')}>
                    <div className={cx('img-container')}>
                      <div className={cx('img-overlay')} />
                      {featuredImage ? (
                        <Image className={cx('featured-image')} imageData={featuredImage?.node} layout />
                      ) : null}
                    </div>
                    <h3>{postTitle}</h3>
                    <p>{excerptstr}</p>
                    <div className={cx('read-more')}>
                      <p>READ ARTICLE</p>
                    </div>
                  </a>
                </Link>
              )
            })}
      </div>
      <div className={cx('btn-container')}>
        <div>
          <Button size='large' link={`/${slug}`}>
            Explore more
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RelevantArticles
