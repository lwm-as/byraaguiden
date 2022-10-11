import React from 'react'
import classNames from 'classnames/bind'
import styles from './LandingPage.module.css'
import LandingPageHero from '../LandingPageHero/LandingPageHero'
import Container from '../../layout/Container/Container'
import Layout from '../../layout/Layout/Layout'
import LandingPageContent from '../LandingPageContent/LandingPageContent'

const cx = classNames.bind(styles)

export default function LandingPage({ data: { landingPage, headerMenu, footerMenu, apps } }) {
  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={landingPage.seo} isHome>
      <div className={cx('root')}>
        <div className={cx('bg-container')}>
          <Container size='large'>
            <LandingPageHero landingPageHero={landingPage?.landingPageHero} />
          </Container>
        </div>
        <Container size='large'>
          <LandingPageContent
            content={landingPage?.content}
            apps={apps}
            recommendedApps={landingPage?.recommendedApps}
            landingPageProviders={landingPage?.landingPageProviders}
          />
        </Container>
      </div>
    </Layout>
  )
}
