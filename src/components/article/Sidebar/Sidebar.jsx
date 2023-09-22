import React from 'react'
import classNames from 'classnames/bind'

import CTASection from '../CTASection/CTASection'

import styles from './Sidebar.module.css'
import useWindowSize from '../../../utils/windowSize'

const cx = classNames.bind(styles)

const Sidebar = ({ ctaEnable = false, category, slug }) => {
  const { width } = useWindowSize()
  const isMobile = width <= 1000
  return (
    <>
      {!isMobile && (
        <div className={cx('root')}>
          <div className={cx('container')}>
            {ctaEnable && <CTASection category={category} slug={slug} />}
            {/*{!showCTA && isRA && <RelevantPosts post={post} category={category} />}*/}
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar
