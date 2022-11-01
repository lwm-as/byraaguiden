import React, { useEffect } from 'react'
import classNames from 'classnames/bind'

import graphql from '../lib/api'
import { GET_HOMEPAGE } from '../lib/queries/pages/homepage'
import { ContentsMenuStateProvider } from '../context/contentsMenuContext'

import Layout from '../components/layout/Layout/Layout'
import Container from '../components/layout/Container/Container'
import HeroSection from '../components/common/HeroSection/HeroSection'

import styles from '../styles/pages/HomePage.module.css'
import ServicePreview from '../components/LanguagePreview/ServicePreview'
import Image from '../components/common/Image/Image'
import Wysiwyg from '../components/common/Wysiwyg/Wysiwyg'
import Cities from '../components/Cities/Cities'
import CustomerReviewBox from '../components/CustomerReviewBox/CustomerReviewBox'
import Button from '../components/common/Button/Button'
import useWindowSize from '../utils/windowSize'

const cx = classNames.bind(styles)

const HomePage = ({ data }) => {
  const {
    page: { seo, homeSection },
    cityPosts,
    headerMenu,
    footerMenu,
    categories
  } = data

  useEffect(() => {
    let trackTag = sessionStorage.getItem('__byråguidenTrackingTag')

    if (!trackTag) {
      trackTag = 'SEO'

      sessionStorage.setItem('__byråguidenTrackingTag', trackTag)
    }
  }, [])

  const { width } = useWindowSize()
  const isMobileWidth = width <= 768

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <div className={cx('main-container')}>
        <div className={cx('hero-container')}>
          <Container className={cx('hero-inner-container')} size='medium'>
            <HeroSection />
          </Container>
        </div>
        <div className={cx('bg-container')}>
          <div className={cx('red-square')} />
          <Container className={cx('service-preview-container')} size='medium'>
            <ServicePreview services={categories.nodes} />
          </Container>
          <div className={cx('dark-square')} />
        </div>
        <div className={cx('section-bg')}>
          {!isMobileWidth && (
            <div className={cx('section-square-bg-container')}>
              <div className={cx('content-section-square-pink', 'rotate135Deg')} />
              <div className={cx('content-section-square-blue', 'rotate135Deg')} />
            </div>
          )}
          <Container size='medium'>
            <section className={cx('section')}>
              <div className={cx('image-container')}>
                <Image imageData={homeSection.sectionImage} />
              </div>
              <div>
                <ContentsMenuStateProvider>
                  <Wysiwyg className={cx('text', 'heading')}>{homeSection?.sectionContent}</Wysiwyg>
                </ContentsMenuStateProvider>
              </div>
            </section>
          </Container>
        </div>
        <div className={cx('last-section')}>
          {!isMobileWidth && (
            <>
              <div className={cx('last-section-square-container', 'top-right-align')}>
                <div className={cx('content-section-square-blue', 'rotate-45Deg')} />
                <div className={cx('content-section-square-pink', 'rotate-45Deg')} />
              </div>
              <div className={cx('last-section-square-container', 'middle-right-align')}>
                <div className={cx('content-section-square-blue', 'rotate-45Deg', 'lighter-blue')} />
                <div className={cx('content-section-square-pink', 'rotate-45Deg')} />
              </div>
              <div className={cx('last-section-square-container', 'quarter-left-align')}>
                <div className={cx('content-section-square-pink', 'rotate135Deg', 'reduce-pink-opacity')} />
                <div className={cx('content-section-square-blue', 'rotate135Deg', 'lighter-blue')} />
              </div>
            </>
          )}
          <Container size='medium'>
            <section className={cx('city-section')}>
              <div className={cx('section-icon-container')}>
                <img src='https://wp.xn--byrguiden-72a.no/wp-content/uploads/2022/10/pin.svg' alt='' />
                <h3 className={cx('section-title')}>Steder</h3>
              </div>
              {categories.nodes
                .filter(({ name }) => name !== 'Sted' && name !== 'Artikler')
                .map(({ name }) => {
                  return <Cities posts={cityPosts} name={name} />
                })}
            </section>
          </Container>
        </div>
        <div className={cx('another-section')}>
          {!isMobileWidth && (
            <div className={cx('another-section-square-bg-container', 'top-left-align')}>
              <div className={cx('content-section-square-blue', 'rotate135Deg', 'lighter-blue')} />
              <div className={cx('content-section-square-pink', 'rotate135Deg', 'reduce-pink-opacity')} />
            </div>
          )}
          <Container size='medium'>
            <section>
              <div className={cx('customer-review-container')}>
                <CustomerReviewBox
                  text='Jeg har alltid funnet Byråguiden svært nyttig
                når jeg har lett etter god webdesign og webutvikling!
                Informasjon er veldig enkel å forstå!'
                  author='Brynjar P.'
                />{' '}
                <CustomerReviewBox
                  text='Jeg har alltid funnet Byråguiden svært nyttig
                når jeg har lett etter god webdesign og webutvikling!
                Informasjon er veldig enkel å forstå!'
                  author='Brynjar P.'
                />{' '}
                <CustomerReviewBox
                  text='Jeg har alltid funnet Byråguiden svært nyttig
                når jeg har lett etter god webdesign og webutvikling!
                Informasjon er veldig enkel å forstå!'
                  author='Brynjar P.'
                />
              </div>
              <div className={cx('register-company-box')}>
                <div className={cx('register-triangles')}>
                  <div className={cx('light-pink-triangle')} />
                  <div className={cx('dark-blue-triangle')} />
                </div>
                <div>
                  <h5 className={cx('register-title')}>Register ditt byrå hos oss</h5>
                </div>
                <div className={cx('register-content')}>
                  <div className={cx('icons-container')}>
                    <img src='/media/icons/check.svg' alt='' />
                    <span>Gratis</span>
                  </div>
                  <div className={cx('icons-container')}>
                    <img src='/media/icons/check.svg' alt='' />
                    <span>Enkelt</span>
                  </div>
                  <div className={cx('icons-container')}>
                    <img src='/media/icons/check.svg' alt='' />
                    <span>Få flere kunder</span>
                  </div>
                  <div className={cx('register-triangles-container-right')}>
                    <div className={cx('dark-blue-triangle-right')} />
                    <div className={cx('light-pink-triangle-right')} />
                  </div>
                </div>
                <div className={cx('register-btn-container')}>
                  <div className={cx('register-btn-inner-container')}>
                    <Button className={cx('gaa-til-registrering')} link='/registrer-bedrift'>
                      Gå til registrering
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await graphql(GET_HOMEPAGE)

  return {
    props: {
      data
    },
    revalidate: 1
  }
}

export default HomePage
