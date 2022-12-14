import classNames from 'classnames/bind'
import styles from './ServiceHero.module.css'
import Image from '../../common/Image/Image'
import excerpts from 'excerpts'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const cx = classNames.bind(styles)

export default function ServiceHero({ category, slug }) {
  let date = category.posts.nodes[0]?.modifiedGmt
  let formattedDate = date && format(parseISO(date), 'dd.MM.yyyy')

  return (
    <Link href={`/${slug}/${category.posts.nodes[0]?.slug}`}>
      <a className={cx('root')}>
        <div>
          <Image className={cx('image')} imageData={category.posts.nodes[0]?.featuredImage.node} />
        </div>
        <div className={cx('content')}>
          {category.posts.nodes.length > 0 && <h3>{category.posts.nodes[0]?.title}</h3>}
          <span className={cx('date')}>{formattedDate || 'No post found'}</span>
          {category.posts.nodes.length > 0 && (
            <p className={cx('p-tag')}>
              {excerpts(category.posts.nodes[0]?.excerpt)}
              <div className={cx('icon-container')}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} color='white' size='xs' />
              </div>
            </p>
          )}
        </div>
      </a>
    </Link>
  )
}
