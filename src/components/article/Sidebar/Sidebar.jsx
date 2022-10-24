import React from 'react'
import classNames from 'classnames/bind'

import RelevantPosts from '../RelevantPosts/RelevantPosts'
import CTASection from '../CTASection/CTASection'
import Button from '../../common/Button/Button'

import useWindowSize from '../../../utils/windowSize'

import styles from './Sidebar.module.css'

const cx = classNames.bind(styles)

const Sidebar = ({ ctaDisabled = false, category }) => {
  const showCTA = ctaDisabled?.ctaDisabled

  return (
    <div className={cx('root')}>
      <div className={cx('container')}>
        {!showCTA && <CTASection category={category} />}
        {/*{!showCTA && isRA && <RelevantPosts post={post} category={category} />}*/}
      </div>
    </div>
  )
}

export default Sidebar
