import React from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './ArticleGridMenu.module.css'

const cx = classNames.bind(styles)

const ArticleGridMenu = ({ className, categoriesData }) => {
  const categories = categoriesData.filter(category => category.slug !== 'blog' && category.slug !== 'cities')

  const router = useRouter()
  const {
    pathname,
    query: { slug: slugname }
  } = router

  return (
    <div className={cx('root', className)}>
      <ul className={cx('menu')}>
        <li className={cx('menu-item')}>
          <Link href='/blog' passHref>
            <a
              className={cx('link', {
                'is-active': pathname === '/articles'
              })}
            >
              <span className={cx('icon-container')}>
                <FontAwesomeIcon icon={['fal', 'grip-horizontal']} />
              </span>
              <span className={cx('text')}>All articles</span>
            </a>
          </Link>
        </li>

        {categories.map(({ name, slug, id, icon: { name: icon } }) => (
          <li className={cx('menu-item')} key={id}>
            <Link href={`/articles/${slug}`} passHref>
              <a
                className={cx('link', {
                  'is-active': slugname === decodeURIComponent(slug)
                })}
              >
                <span className={cx('icon-container')}>
                  <FontAwesomeIcon icon={['fal', icon]} />
                </span>
                <span className={cx('text')}>{name}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArticleGridMenu
