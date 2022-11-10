import React from 'react'
import classNames from 'classnames/bind'

import Link from 'next/link'

import styles from './Breadcrumb.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classNames.bind(styles)

const Breadcrumb = ({ marginBreadCrumb, className, categoryData, title }) => {

  return (
    <nav className={cx('root', className, { marginBreadCrumb })} aria-label='breadcrumb'>
      <ol className={cx('breadcrumb')}>
        <li className={cx('item')}>
          <Link href={'/'}>
            <a className={cx('icon-container')}>
              <FontAwesomeIcon icon={['fas', 'home']} />
            </a>
          </Link>
          <Link href='/' passHref>
            <a className={cx('link')}>Hjem</a>
          </Link>
        </li>
        {/*<li className={cx('item')}>*/}
        {/*  <Link href='/artikler' passHref>*/}
        {/*    <a className={cx('link')}>Artikler</a>*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {categoryData && (
          <li className={cx('item')}>
            <Link href='/artikler' passHref>
              <a className={cx('link')}>{decodeURIComponent(categoryData.name)}</a>
            </Link>
          </li>
        )}
        <li className={cx('item', 'active')} aria-current='page'>
          {decodeURIComponent(title)}
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumb
