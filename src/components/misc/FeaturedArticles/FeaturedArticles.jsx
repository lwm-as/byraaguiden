import React from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Image from '../../common/Image/Image'

import styles from './FeaturedArticles.module.css'

const cx = classNames.bind(styles)

const FeaturedArticles = ({ posts }) => (
  <div className={cx('feature-items')}>
    {posts.nodes.map(node => {
      const { title, slug, excerpt, featuredImage } = node

      let excerptstr = excerpt

      if (excerptstr.length > 110) {
        excerptstr = `${excerptstr.substring(3, 110)}...`
      }

      return (
        <Link key={slug} href={`/${slug}`}>
          <a className={cx('featured-item')}>
            <div className={cx('img-container')}>
              {featuredImage ? <Image className={cx('featured-image')} imageData={featuredImage?.node} layout /> : null}
            </div>
            <h3>{title}</h3>
            <p>{excerptstr}</p>
            <div className={cx('read-more')}>
              <p>
                Les mer <FontAwesomeIcon icon={['fal', 'arrow-right']} color='#5899E2' />
              </p>
            </div>
          </a>
        </Link>
      )
    })}
  </div>
)

export default FeaturedArticles
