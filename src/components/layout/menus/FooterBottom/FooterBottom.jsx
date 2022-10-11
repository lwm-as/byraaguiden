import React from 'react'
import classNames from 'classnames/bind'

import MenuItem from '../MenuItem/MenuItem'

import styles from './FooterBottom.module.css'

const cx = classNames.bind(styles)

const FooterSection = ({ privacyItems, socialItems }) => (
  <div className={cx('bottom-content')}>
    <div className={cx('sub-menu')}>
      {privacyItems.map(menu => {
        const { label, path } = menu
        return <MenuItem key={label} label={label} path={path} className='footer-menu-item' />
      })}
    </div>
    <div className={cx('social-menu')}>
      {socialItems.map(menu => {
        const { label, path, cssClasses } = menu
        return <MenuItem key={label} label={label} path={path} icon={cssClasses} social className='footer-menu-item' />
      })}
    </div>
  </div>
)

export default FooterSection
