import React from 'react'
import classNames from 'classnames/bind'

import RelevantPosts from '../RelevantPosts/RelevantPosts'
import CTASection from '../CTASection/CTASection'
import Button from '../../common/Button/Button'

import useWindowSize from '../../../utils/windowSize'

import styles from './Sidebar.module.css'

const cx = classNames.bind(styles)

const PostContent = ({ ctaDisabled = false, category = {} }) => {
  const showCTA = ctaDisabled?.ctaDisabled

  const { width } = useWindowSize()
  const isMobile = width <= 768

  return (
    <div className={cx('root')}>
      <div className={cx('container')}>
        {!showCTA && <CTASection category={category} />}
        {/*{!showCTA && isRA && <RelevantPosts post={post} category={category} />}*/}
      </div>
    </div>
  )
}

export default PostContent
