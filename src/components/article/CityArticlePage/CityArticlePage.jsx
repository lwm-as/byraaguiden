import React from 'react'
import classNames from 'classnames/bind'

import Layout from '../../layout/Layout/Layout'
import Container from '../../layout/Container/Container'

import styles from './CityArticlePage.module.css'

const cx = classNames.bind(styles)

const CityArticlePage = ({ data }) => {
  const {
    post: { seo },
    headerMenu,
    footerMenu
  } = data
  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <Container className={cx('root')} size='small'>
        Innhold - Stedsarticles - Oversikt
      </Container>
    </Layout>
  )
}

export default CityArticlePage
