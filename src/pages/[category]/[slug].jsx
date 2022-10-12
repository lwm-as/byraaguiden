import graphql from '../../lib/api'
import { GET_POST_SLUGS, GET_POST } from '../../lib/queries/posts/blogPost'

import { ContentsMenuStateProvider } from '../../context/contentsMenuContext'

import useWindowSize from '../../utils/windowSize'

import styles from '../../styles/pages/BlogArticle.module.css'
import Container from '../../components/layout/Container/Container'
import Layout from '../../components/layout/Layout/Layout'
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb'
import classNames from 'classnames/bind'
import PostContent from '../../components/article/PostContent/PostContent'
import React from 'react'
import RecommendationSidebar from '../../components/article/ArticlePage/RecommendationSidebar/RecommendationSidebar'
import TableOfContent from '../../components/article/ArticlePage/TaleOfContent/TableOfContent'
import Sidebar from '../../components/article/Sidebar/Sidebar'

const cx = classNames.bind(styles)

const BlogArticle = ({ data }) => {
  const {
    // post: { title, modifiedGmt, excerpt, featuredImage, content, seo, categories },
    post,
    category,
    category: { posts },
    headerMenu,
    footerMenu
  } = data

  const { width } = useWindowSize()
  const isMobile = width <= 1000

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={post.seo} categories={post.categories}>
      <Container className={cx('split-view')} size='medium'>
        <ContentsMenuStateProvider>
          <PostContent marginBreadCrumb postHeaderIsInside post={post} />
          <div className={cx('side-container')}>
            <div className={cx('inner-container')}>
              {!isMobile && <Sidebar ctaDisabled={post.ctaDisabled} post={post} category={category} />}
              <TableOfContent />
            </div>
          </div>
        </ContentsMenuStateProvider>
      </Container>
      {/*<FeaturedArticles posts={posts}>Flere nyttige tips</FeaturedArticles>*/}
    </Layout>
  )
}

export async function getStaticPaths() {
  const { posts } = await graphql(GET_POST_SLUGS)

  const paths = posts.nodes.map(node => `/${node.categories.nodes[1].slug}/${node.slug}`)

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const variables = {
    id: params.slug,
    catId: encodeURIComponent(params.category)
  }
  const data = await graphql(GET_POST, variables)

  return {
    props: {
      data
    },
    revalidate: 1
  }
}

export default BlogArticle
