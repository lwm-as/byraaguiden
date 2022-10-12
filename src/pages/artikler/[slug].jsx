import graphql from '../../lib/api'
import { GET_ALL_CATEGORIES, GET_CATEGORY_SLUGS, GET_POSTS_BY_CATEGORY } from '../../lib/queries/posts/categories'
import useWindowSize from '../../utils/windowSize'

import styles from '../../styles/pages/BlogCategories.module.css'
import Layout from '../../components/layout/Layout/Layout'
import Container from '../../components/layout/Container/Container'
import GridHero from '../../components/blog/GridHero/GridHero'
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb'
import ServiceHero from '../../components/article/ServiceHero/ServiceHero'
import ReadMoreGrid from '../../components/article/GridItem/GridItem'
import classNames from 'classnames/bind'
import ServiceSection from '../../components/article/ServiceSection/ServiceSection'
import BlogGrid from '../../components/article/BlogGrid/BlogGrid'
import { useState } from 'react'

const cx = classNames.bind(styles)

const BlogCategories = ({ data, categories }) => {
  const {
    category,
    category: { posts, seo },
    footerMenu,
    headerMenu,
    featuredPosts: { posts: featured },
    popularPosts: { posts: popular }
  } = data

  const size = useWindowSize()

  const [alreadyShownPosts, setAlreadyShownPosts] = useState()

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo} categories={categories}>
      <GridHero title={category.name} description={category.posts.nodes} />
      <Container size='medium'>
        <Breadcrumb title={category.name} category={category} size={size} />
        <ServiceHero category={category} />
        <h2 className={cx('section-title')}>Les mer om {category.name.toLowerCase()}</h2>
        {/*<GridItem setAlreadyShownPosts={setAlreadyShownPosts} posts={posts} category={category} />*/}
      </Container>
      <ServiceSection category={category} />
      <Container size='medium'>
        <BlogGrid categories={categories} alreadyShownPosts={alreadyShownPosts} posts={posts} category={category} />
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const { categories } = await graphql(GET_CATEGORY_SLUGS)

  const services = categories.nodes.filter(node => node.slug !== 'artikler')

  const paths = services.map(({ slug }) => `/artikler/${slug}`)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const variables = {
    id: encodeURIComponent(params.slug),
    first: 6,
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

export default BlogCategories
