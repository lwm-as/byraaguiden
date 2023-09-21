import React from 'react'
import Layout from '../components/layout/Layout/Layout'
import Container from '../components/layout/Container/Container'
import HeroSection from '../components/common/HeroSection/HeroSection'
import graphql from '../lib/api'
import { GET_MISCPAGE_BY_URI } from '../lib/queries/pages/homepage'
import classNames from 'classnames/bind'
import styles from '../styles/pages/HomePage.module.css'
import Link from 'next/link'
const cx = classNames.bind(styles)

function Custom404({
  data: {
    page: { seo },
    headerMenu,
    footerMenu
  }
}) {
  const newSeo = {
    ...seo,
    title: '404 - Her var det ingenting',
    metaDesc: '404 - Her var det ingenting',
    opengraphUrl: 'https://wp.xn--byrguiden-72a.no/404',
    opengraphTitle: '404 - Her var det ingenting'
  }
  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={newSeo}>
      <Container className={cx('lost-inner-container')} size='medium'>
        <div className={cx('lost-container')}>
          <p>Oida! Her var det ingenting</p>
          <a className={cx('lost-link')} href='/'>
            Tilbake til forsiden
          </a>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = {
    id: 'suksess-registrering'
  }
  const data = await graphql(GET_MISCPAGE_BY_URI, variables)

  return {
    props: {
      data
    },
    revalidate: 86400
  }
}

export default Custom404
