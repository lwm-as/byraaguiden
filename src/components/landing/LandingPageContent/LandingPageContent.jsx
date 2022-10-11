import React from 'react'
import classNames from 'classnames/bind'
import styles from './LandingPageContent.module.css'
import LandingPageProvider from '../LandingPageProvider/LandingPageProvider'
// import LandingPageSelect from '../LandingPageSelect/LandingPageSelect'
// import Button from '../../common/Button/Button'
import useWindowSize from '../../../utils/windowSize'
import RecommendationSidebar from '../../article/ArticlePage/RecommendationSidebar/RecommendationSidebar'
import SidebarInfoBlock from '../SidebarInfoBlock/SidebarInfoBlock'
import EditorialReviewBlock from '../EditorialReviewBlock/EditorialReviewBlock'
import { ContentsMenuStateProvider } from '../../../context/contentsMenuContext'
import Wysiwyg from '../../common/Wysiwyg/Wysiwyg'
import TopPick from '../TopPick/TopPick'

const cx = classNames.bind(styles)

export default function LandingPageContent({
  content,
  apps,
  recommendedApps: { recommendedApps = [], hasCustomRecommendedApps = false },
  landingPageProviders: { landingpageProviders }
}) {
  const { width } = useWindowSize()
  const isMobile = width <= 768
  const ourChoice = landingpageProviders?.find(({ landingpageProvider }) => landingpageProvider.title === 'Duolingo')

  return (
    <>
      <div className={cx('header-container')}>
        <h2>Top 10 selected</h2>
      </div>
      <div className={cx('root')}>
        <div className={cx('main')}>
          <div className={cx('provider-container')}>
            {landingpageProviders.map((provider, idx) => (
              <LandingPageProvider idx={idx + 1} provider={provider} />
            ))}
          </div>
          <div className={cx('second-section')}>
            <h3 className={cx('our-choice-heading')}>Our Top Pick for the Best Language Learning Service</h3>
            <div className={cx('landing-page-provider')}>
              <LandingPageProvider idx={1} provider={ourChoice} />
            </div>
            <ContentsMenuStateProvider>
              <Wysiwyg>{content}</Wysiwyg>
            </ContentsMenuStateProvider>
          </div>
          <div className={cx('third-section')}>
            <h3 className={cx('top-heading')}>Our Top 3 Picks</h3>
            <TopPick landingpageProviders={landingpageProviders} />
          </div>
        </div>
        <div className={cx('sidebar')}>
          {!isMobile && <SidebarInfoBlock />}
          <div className={cx('inner-container')}>
            {!isMobile && (
              <RecommendationSidebar
                hasCustomRecommendedApps={hasCustomRecommendedApps}
                apps={apps}
                isMobile={isMobile}
                recommendedApps={recommendedApps}
              />
            )}
            {!isMobile && <EditorialReviewBlock provider={landingpageProviders} />}
          </div>
        </div>
      </div>
    </>
  )
}

{
  /* <div className={cx('btn-container')}> */
}
{
  /*   <div> */
}
{
  /*     <Button size='large'>Load more</Button> */
}
{
  /*   </div> */
}
{
  /* </div> */
}

{
  /* <div className={cx('select-container')}> */
}
{
  /*   <span>Sort By</span> */
}
{
  /*   <LandingPageSelect /> */
}
{
  /*   <span>Filters</span> */
}
{
  /* </div> */
}
