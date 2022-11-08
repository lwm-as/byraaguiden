import React from 'react'
import classNames from 'classnames/bind'

import CTASection from '../CTASection/CTASection'

import styles from './Sidebar.module.css'

const cx = classNames.bind(styles)

const Sidebar = ({ ctaEnable = false, category }) => {
  return (
    <div className={cx('root')}>
      <div className={cx('container')}>
        {ctaEnable && <CTASection category={category} />}
        {/*{!showCTA && isRA && <RelevantPosts post={post} category={category} />}*/}
      </div>
    </div>
  )
}

export default Sidebar
