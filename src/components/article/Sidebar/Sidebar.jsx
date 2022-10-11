import React from 'react'
import classNames from 'classnames/bind'

import RelevantPosts from '../RelevantPosts/RelevantPosts'
import CTASection from '../CTASection/CTASection'
import Button from '../../common/Button/Button'

import useWindowSize from '../../../utils/windowSize'

import styles from './Sidebar.module.css'

const cx = classNames.bind(styles)

const PostContent = ({ post, category, show }) => {
  const {
    ctaDisabled: { ctaDisabled }
  } = post
  const { slug } = category

  const isRA = category.posts.nodes.length > 1
  const showCTA = !ctaDisabled

  const { width } = useWindowSize()
  const isMobile = width <= 768

  return (
    <div className={cx('root')}>
      <div className={cx('container')}>
        {/* {showCTA && <CTASection category={category} />} */}
        {!showCTA && isRA && <RelevantPosts post={post} category={category} />}
      </div>
    </div>
  )

  // return (
  //   <>
  //     {isMobile && showCTA ? (
  //       <div className={cx('cta-footer', { show })}>
  //         <div className={cx('cta-button-container')}>
  //           <Button link={`/${slug}/tilbud`} flex='flex-center' size='large'>
  //             Få tilbud
  //           </Button>
  //         </div>
  //       </div>
  //     ) : (
  //       <div className={cx('root')}>
  //         <div className={cx('container')}>
  //           {/* {showCTA && <CTASection category={category} />} */}
  //           {!showCTA && isRA && <RelevantPosts post={post} category={category} />}
  //         </div>
  //       </div>
  //     )}
  //   </>
  // )
}

export default PostContent
