import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react'
import styles from './LanguagesArticlePage.module.css'
import useWindowSize from '../../../utils/windowSize'
import Layout from '../../layout/Layout/Layout'
import Container from '../../layout/Container/Container'
import RecommendationSidebar from '../ArticlePage/RecommendationSidebar/RecommendationSidebar'
import { ContentsMenuStateProvider } from '../../../context/contentsMenuContext'
import PostContent from '../PostContent/PostContent'
import TableOfContent from '../ArticlePage/TaleOfContent/TableOfContent'

const cx = classNames.bind(styles)

export default function LanguagesArticlePage({ data }) {
  const {
    post,
    post: {
      seo,
      recommendedApps: { hasRecommendedField, recommendedApps }
    },
    headerMenu,
    footerMenu
  } = data

  const {
    categories,
    ctaDisabled: { ctaDisabled }
  } = post

  const category = categories.nodes[0]

  const isRA = category.posts.nodes.length > 1
  const showCTA = !ctaDisabled

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

  const { width } = useWindowSize()
  const isMobile = width <= 768

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo} white>
      <Container className={cx('root')} size='large'>
        <div className={cx('split-view')}>
          <ContentsMenuStateProvider>
            <PostContent post={post} />
            <div className={cx('side-container')}>
              {!isMobile && hasRecommendedField && (
                <RecommendationSidebar isMobile={isMobile} noHeading recommendedApps={recommendedApps} />
              )}
              <TableOfContent />
            </div>
          </ContentsMenuStateProvider>
          {isMobile && hasRecommendedField && (
            <RecommendationSidebar isMobile={isMobile} noHeading recommendedApps={recommendedApps} />
          )}
          {/* <Sidebar post={post} category={category} show={isCtaShown} /> */}
        </div>
        {/* {showCTA && isRA && <RelevantArticles post={post} category={category} />} */}
      </Container>
    </Layout>
  )
}
