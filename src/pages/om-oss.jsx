import Layout from '../components/layout/Layout/Layout'
import { GET_MISCPAGE_BY_URI } from '../lib/queries/pages/homepage'
import graphql from '../lib/api'
import GridHero from '../components/blog/GridHero/GridHero'
import React from 'react'
import { ThisIsHowItWorks } from '../components/aboutIs/ThisIsHowItWorks/ThisIsHowItWorks'
import Container from '../components/layout/Container/Container'
import classNames from 'classnames/bind'
import styles from '../styles/pages/About-us.module.css'

const cx = classNames.bind(styles)

const AboutUs = ({ data }) => {
  const {
    page: { title, content, seo, featuredImage },
    headerMenu,
    footerMenu
  } = data

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <GridHero width={cx('max-width')} textAlignCenter title={title} description={content} />
      <Container size='medium'>
        <ThisIsHowItWorks />
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = {
    id: 'om-oss'
  }
  const data = await graphql(GET_MISCPAGE_BY_URI, variables)

  return {
    props: {
      data
    },
    revalidate: 1
  }
}

export default AboutUs
