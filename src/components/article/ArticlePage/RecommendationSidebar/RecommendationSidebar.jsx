import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { useRouter } from 'next/dist/client/router'
import OurRecommendation from '../OurRecommendation/OurRecommendation'
import styles from './RecommendationSidebar.module.css'

const cx = classNames.bind(styles)

export default function RecommendationSidebar({
  apps: { nodes },
  isMobile,
  noHeading,
  recommendedApps = [],
  isCompareArticle,
  hasCustomRecommendedApps,
  winnerApp: { winner: customWinnerApp } = '',
  hasCustomWinnerApp
}) {
  const [apps, setApps] = useState([])
  const [app, setApp] = useState(undefined)

  const [winnerApp, setWinnerApp] = useState(undefined)

  const router = useRouter()

  const reviewPath = router.asPath?.split('/')[1].split('-').at(-1)
  const isReviewArticle = reviewPath === 'review'

  /** article with two or more recommendations -- only for blog articles and language-apps */
  // if no custom recommended app is defined in wp, setting default apps to "babbel" and "pimsleur" --> this returns array
  const defaultApps =
    nodes?.filter(
      ({ appInfo: { appName } }) => appName.toLowerCase() === 'babbel' || appName.toLowerCase() === 'pimsleur'
    ) || ''
  const defaultApp = nodes?.find(({ appInfo: { appName } }) => appName.toLowerCase() === 'babbel') || ''

  /** compare article */
  // determines if it is a compare article
  const compareArticlePath =
    router.asPath
      ?.split('/')[1]
      .split('-')
      .filter(el => el !== 'vs') || ''

  // if no custom winner app is defined in WP, this code gets the first app from the first appName in path
  const { appInfo: firstWinnerAppFromArticle = '' } =
    nodes?.find(({ appInfo: { appName } }) => appName.toLowerCase() === compareArticlePath.at(0)) || ''

  useEffect(() => {
    if (!hasCustomWinnerApp || !customWinnerApp) {
      setWinnerApp(firstWinnerAppFromArticle)
    } else setWinnerApp(customWinnerApp?.appInfo)
  }, [customWinnerApp])

  // to set an array of apps //
  useEffect(() => {
    if (!hasCustomRecommendedApps) {
      setApps(defaultApps)
    } else setApps(recommendedApps)
  }, [nodes, recommendedApps])

  // to set a single app
  useEffect(() => {
    if (hasCustomRecommendedApps && recommendedApps?.length <= 1) {
      // setting the first element returned from WP
      setApp(recommendedApps[0].recommendedApp)
    } else {
      setApp(defaultApp)
    }
  }, [recommendedApps])

  // winnerAppRecommendation
  const winnerAppSidebar = () => (
    <OurRecommendation
      winnerHeading
      isMobile={isMobile}
      appRating={winnerApp?.appRating}
      appName={winnerApp?.appName}
      appFeatures={winnerApp?.appFeatures}
      appLogo={winnerApp?.appLogo}
      appVisitUrl={winnerApp?.appVisitUrl}
    />
  )

  // singleAppRecommendation
  const singleRecommendation = () => (
    <OurRecommendation
      isMobile={isMobile}
      appRating={app?.appInfo.appRating}
      appName={app?.appInfo.appName}
      appFeatures={app?.appInfo.appFeatures}
      appLogo={app?.appInfo.appLogo}
      appVisitUrl={app?.appInfo.appVisitUrl}
    />
  )

  // multiple apps recommendation
  const defaultAppsRecommendation = () =>
    apps
      ?.slice(0)
      .reverse()
      .map(({ appInfo: { appName, appFeatures, appLogo, appRating, appVisitUrl } }) => (
        <OurRecommendation
          isMobile={isMobile}
          appRating={appRating}
          appName={appName}
          appFeatures={appFeatures}
          appLogo={appLogo}
          appVisitUrl={appVisitUrl}
        />
      ))

  const customRecommendedApps = () => {
    apps?.map(
      ({
        recommendedApp: {
          appInfo: { appName, appFeatures, appLogo, appRating, appVisitUrl }
        }
      }) => (
        <OurRecommendation
          isMobile={isMobile}
          appRating={appRating}
          appName={appName}
          appFeatures={appFeatures}
          appLogo={appLogo}
          appVisitUrl={appVisitUrl}
        />
      )
    )
  }

  return (
    <div className={cx('root')}>
      <div className={cx('container')}>
        {!noHeading && <h2 className={cx('heading')}>Our recommendations</h2>}
        {hasCustomRecommendedApps && customRecommendedApps()}
        {!isReviewArticle && !isCompareArticle && defaultAppsRecommendation()}
        {isCompareArticle && winnerAppSidebar()}
        {isReviewArticle && singleRecommendation()}
      </div>
    </div>
  )
}
