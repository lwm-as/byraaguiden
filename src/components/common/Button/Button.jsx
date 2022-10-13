import React from 'react'
import classNames from 'classnames/bind'

import Link from 'next/link'

import styles from './Button.module.css'

const cx = classNames.bind(styles)

const Button = ({
  className,
  type = 'button',
  link,
  color = '',
  size = 'medium',
  flex,
  children,
  onClick,
  disabled,
  ...other
}) => {
  if (link) {
    return (
      <div className={cx('root', flex, className)}>
        <Link href={link} passHref>
          <a href className={cx('button', color, size)}>
            {children}
          </a>
        </Link>
      </div>
    )
  }
  return (
    <div className={cx('root', flex, className)}>
      <button {...other} disabled={disabled} type={type} className={cx('button', color, size)} onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button
