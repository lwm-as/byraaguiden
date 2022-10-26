import React from 'react'
import classNames from 'classnames/bind'

import MenuItem from '../MenuItem/MenuItem'

import styles from './FooterSection.module.css'

const cx = classNames.bind(styles)

const FooterSection = ({ title, items, secondTitle, secondItems }) => (
  <div className={cx('footer-content')}>
    <h4>{title}</h4>
    <div className={cx('sub-menu')}>
      {items?.map(menu => {
        const { label, path } = menu
        return <MenuItem key={label} label={label} path={path} className='footer-menu-item' />
      })}
    </div>
    {secondTitle && (
      <>
        <h4>{secondTitle}</h4>
        <div className={cx('sub-menu')}>
          {secondItems?.map(menu => {
            const { label, path } = menu
            return <MenuItem key={label} label={label} path={path} className='footer-menu-item' />
          })}
        </div>
      </>
    )}
  </div>
)

export default FooterSection
