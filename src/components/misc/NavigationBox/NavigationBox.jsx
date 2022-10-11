import React from 'react'
import classNames from 'classnames/bind'

import Button from '../../common/Button/Button'

import styles from './NavigationBox.module.css'

const cx = classNames.bind(styles)

const NavigationBox = ({ content, color = 'dark' }) => {
  const isDark = color === 'dark'
  const { title, paragraph, buttonText, buttonLink } = content
  return (
    <div className={cx('root', isDark ? 'dark-theme' : 'light-theme')}>
      <div className={cx('section', 'section-left')}>
        <h3 className={cx('title')}>{title}</h3>
        <p className={cx('paragraph')}>{paragraph}</p>
      </div>
      <div className={cx('section', 'section-right')}>
        <Button link={buttonLink} size='large'>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default NavigationBox
