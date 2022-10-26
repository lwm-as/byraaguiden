import graphql from '../../lib/api'
import { GET_ALL_CATEGORIES, GET_POSTS_BY_CATEGORY } from '../../lib/queries/posts/categories'

import Layout from '../../components/layout/Layout/Layout'
import GridHero from '../../components/blog/GridHero/GridHero'
import Container from '../../components/layout/Container/Container'
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb'
import classNames from 'classnames/bind'
import useWindowSize from '../../utils/windowSize'
import React, { useState } from 'react'
import styles from '../../styles/pages/BlogCategories.module.css'
import ServiceTab from '../../components/ServiceTab/ServiceTab'
import ServicePreviewArticle from '../../components/ServicePreviewArticle/ServicePreviewArticle'
import BlogGrid from '../../components/article/BlogGrid/BlogGrid'

const cx = classNames.bind(styles)

const Blogg = ({ data, categories }) => {
  const {
    category,
    category: { posts, seo },
    footerMenu,
    headerMenu,
    featuredPosts: { posts: featured },
    popularPosts: { posts: popular }
  } = data
  const {
    categories: { nodes }
  } = categories

  const services = nodes.map(node => {
    if (node.name === 'Artikler') {
      node.name = 'Alle artikler'
    }
    return node
  })

  // const { pathname } = useRouter()
  //
  // const isFeatured = featured.nodes.length > 0
  // const isPopular = popular.nodes.length > 0

  const size = useWindowSize()

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo} categories={categories}>
      <GridHero title='Alle artikler' />
      <Container size='medium'>
        <Breadcrumb title={category.name} category={category} size={size} />
      </Container>
      <BlogGrid categories={categories} posts={posts} category={category}>
        <>
          <div className={cx('hero-container')}>
            <Container className={cx('hero-inner-container')} size='medium'>
              <ServiceTab />
            </Container>
          </div>
          <div className={cx('bg-container')}>
            <div className={cx('red-square')} />
            <Container className={cx('service-preview-container')} size='medium'>
              <ServicePreviewArticle services={categories.categories} />
            </Container>
            <div className={cx('dark-square')} />
          </div>
        </>
      </BlogGrid>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = {
    id: 'artikler',
    after: 'After',
    first: 9,
    featured: 'Featured',
    popular: 'Popular'
  }

  const data = await graphql(GET_POSTS_BY_CATEGORY, variables)
  const categories = await graphql(GET_ALL_CATEGORIES)

  return {
    props: {
      data,
      categories
    },
    revalidate: 1
  }
}

export default Blogg
