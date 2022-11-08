import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import Layout from '../../layout/Layout/Layout'
import Container from '../../layout/Container/Container'
import PostContent from '../PostContent/PostContent'

import styles from './ArticlePage.module.css'
import TableOfContent from './TaleOfContent/TableOfContent'
import { ContentsMenuStateProvider } from '../../../context/contentsMenuContext'
import Sidebar from '../Sidebar/Sidebar'
import useWindowSize from '../../../utils/windowSize'
// import RecommendationSidebar from './RecommendationSidebar/RecommendationSidebar'

const cx = classNames.bind(styles)

const ArticlePage = ({ data }) => {
  const {
    post,
    post: {
      seo
      // recommendedApps: { recommendedApps = [], hasCustomRecommendedApps = false }
    },

    // apps,
    headerMenu,
    footerMenu
  } = data

  const {
    categories
    // ctaEnable: { ctaEnable }
  } = post

  const category = categories.nodes[0]

  // const isRA = category.posts.nodes.length > 1
  // const showCTA = !ctaEnable

  const { width } = useWindowSize()
  const isMobile = width <= 768

  const [isCtaShown, toggleCtaShown] = useState(false)

  const handleScroll = (heroContToTop = 0) => {
    if (window.innerWidth < 768) {
      if (window.pageYOffset > heroContToTop) {
        toggleCtaShown(true)
      } else if (window.pageYOffset < heroContToTop) {
        toggleCtaShown(false)
      }
    }
  }

  useEffect(() => {
    let trackTag = sessionStorage.getItem('__byråguidenTrackingTag')

    if (!trackTag) {
      trackTag = 'SEO'

      sessionStorage.setItem('__byråguidenTrackingTag', trackTag)
    }

    if (window) {
      const heroContToTop = 600
      window.addEventListener('scroll', () => {
        handleScroll(heroContToTop)
      })
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo} white>
      <Container className={cx('root')} size='large'>
        <div className={cx('split-view')}>
          <ContentsMenuStateProvider>
            {/* {!isMobile && ( */}
            {/*   <RecommendationSidebar */}
            {/*     hasCustomRecommendedApps={hasCustomRecommendedApps} */}
            {/*     apps={apps} */}
            {/*     isMobile={isMobile} */}
            {/*     recommendedApps={recommendedApps} */}
            {/*   /> */}
            {/* )} */}
            <PostContent postHeaderIsInside post={post} />
            <div className={cx('side-container')}>
              <TableOfContent />
            </div>
          </ContentsMenuStateProvider>
          {/* {isMobile && ( */}
          {/*   <RecommendationSidebar */}
          {/*     hasCustomRecommendedApps={hasCustomRecommendedApps} */}
          {/*     apps={apps} */}
          {/*     isMobile={isMobile} */}
          {/*     noHeading */}
          {/*     recommendedApps={recommendedApps} */}
          {/*   /> */}
          {/* )} */}
          <Sidebar post={post} category={category} show={isCtaShown} />
        </div>
        {/* {showCTA && isRA && <RelevantArticles post={post} category={category} />} */}
      </Container>
    </Layout>
  )
}

export default ArticlePage
