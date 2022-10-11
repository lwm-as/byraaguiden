import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react'
import styles from './ReviewArticlePage.module.css'
import useWindowSize from '../../../utils/windowSize'
import Layout from '../../layout/Layout/Layout'
import Container from '../../layout/Container/Container'
import RecommendationSidebar from '../ArticlePage/RecommendationSidebar/RecommendationSidebar'
import { ContentsMenuStateProvider } from '../../../context/contentsMenuContext'
import PostContent from '../PostContent/PostContent'
import TableOfContent from '../ArticlePage/TaleOfContent/TableOfContent'
import CtaFooterButton from '../../CtaFooterButton/CtaFooterButton'
import PostHeader from '../PostHeader/PostHeader'
import RelevantArticles from '../RelevantArticles/RelevantArticles'

const cx = classNames.bind(styles)

export default function ReviewArticlePage({ data }) {
  const {
    post,
    post: {
      categories,
      seo,
      recommendedApps: { recommendedApps, hasCustomRecommendedApps = false }
    },
    apps,
    headerMenu,
    footerMenu
  } = data

  const {
    ctaDisabled: { ctaDisabled }
  } = post

  const category = categories.nodes[0]

  const isRA = category.posts.nodes.length > 1

  console.log(isRA)

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
        <PostHeader fullwidth post={post} />
        <div className={cx('split-view')}>
          <ContentsMenuStateProvider>
            <PostContent className={cx('wyswig-no-margin-top')} post={post} />
            <div className={cx('side-container')}>
              <div className={cx('inner-container')}>
                {!isMobile && (
                  <RecommendationSidebar
                    hasCustomRecommendedApps={hasCustomRecommendedApps}
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
          <CtaFooterButton apps={apps} isMobile={isMobile} ctaDisabled={ctaDisabled} show={isCtaShown} />
        </div>

        {isRA && <RelevantArticles post={post} category={category} />}
      </Container>
    </Layout>
  )
}
