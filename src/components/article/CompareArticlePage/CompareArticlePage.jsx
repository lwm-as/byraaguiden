import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import Layout from '../../layout/Layout/Layout'
import Container from '../../layout/Container/Container'
import PostContent from '../PostContent/PostContent'
import TableOfContent from '../ArticlePage/TaleOfContent/TableOfContent'
import { ContentsMenuStateProvider } from '../../../context/contentsMenuContext'
import Sidebar from '../Sidebar/Sidebar'
import useWindowSize from '../../../utils/windowSize'
import RecommendationSidebar from '../ArticlePage/RecommendationSidebar/RecommendationSidebar'

import styles from '../ArticlePage/ArticlePage.module.css'
import PostHeader from '../PostHeader/PostHeader'
import RelevantArticles from '../RelevantArticles/RelevantArticles'

const cx = classNames.bind(styles)

const ComparisonPage = ({ data }) => {
  const {
    post,
    post: {
      seo,
      winnerApp,
      recommendedApps: { recommendedApps = [], hasCustomRecommendedApps = false }
    },

    apps,
    headerMenu,
    footerMenu
  } = data

  const {
    categories
    // ctaDisabled: { ctaDisabled }
  } = post

  const category = categories.nodes[0]

  const isRA = category.posts.nodes.length > 1
  // const showCTA = !ctaDisabled

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
        <PostHeader fullwidth post={post} />
        <div className={cx('split-view', 'isCompareArticle')}>
          <ContentsMenuStateProvider>
            <PostContent className={cx('wyswig-no-margin-top')} post={post} />
            <div className={cx('side-container')}>
              <div className={cx('inner-container')}>
                {!isMobile && (
                  <RecommendationSidebar
                    winnerApp={winnerApp}
                    hasCustomWinnerApp={winnerApp?.hasCustomWinnerApp}
                    hasCustomRecommendedApps={hasCustomRecommendedApps}
                    isCompareArticle
                    apps={apps}
                    isMobile={isMobile}
                    noHeading
                    recommendedApps={recommendedApps}
                  />
                )}
                <TableOfContent />
              </div>
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
        {isRA && <RelevantArticles post={post} category={category} />}
      </Container>
    </Layout>
  )
}

export default ComparisonPage
