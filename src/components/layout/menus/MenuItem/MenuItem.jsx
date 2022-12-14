import React from 'react'
import classNames from 'classnames/bind'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './MenuItem.module.css'

const cx = classNames.bind(styles)

const MenuItem = ({ label, path, icon, social, className }) => {
  const isIcon = !!icon && icon.length > 0

  if (label.includes('Bogstadveien')) {
    const str = label.split(', ')
    const street = str[0]

    return (
      <span className={cx('address')}>
        {street},<br></br>
        {str[1]} <br></br>
      </span>
    )
  }

  if (social) {
    return (
      <a href={path}>
        <FontAwesomeIcon icon={['fab', `${icon[0]}`]} size='2x' color='#707070' />
      </a>
    )
  }

  return (
    <Link href={path} passHref>
      <a className={cx(`${className}`)} href>
        <span className={cx('label')}>{label}</span>
        {isIcon && (
          <div className={cx('icon-wrapper')}>
            <FontAwesomeIcon icon={['fal', `${icon[0]}`]} size='lg' color='#2288EF' />
          </div>
        )}
      </a>
    </Link>
  )
}

export default MenuItem
