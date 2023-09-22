import graphql from '../../lib/api'
import { GET_POST, GET_POST_SLUGS } from '../../lib/queries/posts/blogPost'

import { ContentsMenuStateProvider } from '../../context/contentsMenuContext'

import useWindowSize from '../../utils/windowSize'

import styles from '../../styles/pages/BlogArticle.module.css'
import Container from '../../components/layout/Container/Container'
import Layout from '../../components/layout/Layout/Layout'
import classNames from 'classnames/bind'
import PostContent from '../../components/article/PostContent/PostContent'
import React from 'react'
import Sidebar from '../../components/article/Sidebar/Sidebar'
import SimilarArticles from '../../components/article/SimilarArticles/SimilarArticles'
import FeaturedArticles from '../../components/misc/FeaturedArticles/FeaturedArticles'
import CtaFooterButton from '../../components/CtaFooterButton/CtaFooterButton'
import { useCtaToggler } from '../../hooks/useCtaToggler'
import ArticleProvider from '../../context/ArticleProvider'

const cx = classNames.bind(styles)

const BlogArticle = ({ data }) => {
  const {
    post: {
      author,
      excerpt,
      modifiedGmt,
      ctaEnable: { ctaEnable }
    },
    post,
    category,
    category: { posts, slug },
    headerMenu,
    footerMenu
  } = data

  const { width } = useWindowSize()
  const isMobile = width <= 1000

  const { isCtaShown } = useCtaToggler(800)

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={post.seo} categories={post.categories}>
      <Container className={cx('split-view')} size='medium'>
        <ArticleProvider>
          <ContentsMenuStateProvider>
            <PostContent modifiedGmt={modifiedGmt} author={author} excerpt={excerpt} postHeaderIsInside post={post} />
            <div className={cx('side-container')}>
              <div className={cx('inner-container')}>
                <Sidebar ctaEnable={ctaEnable} category={category} />
                {!isMobile && posts?.nodes.length > 1 && (
                  <SimilarArticles post={data?.post} category={category} posts={posts} />
                )}
              </div>
            </div>
          </ContentsMenuStateProvider>
          <FeaturedArticles post={data?.post} category={category} author={author} posts={posts}>
            Dykk enda dypere i {category.name.toLowerCase()}
          </FeaturedArticles>
        </ArticleProvider>
        <CtaFooterButton slug={decodeURIComponent(slug)} ctaEnable={ctaEnable} show={isCtaShown} />
      </Container>
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
  // console.log('data', data)
  if (!data.post) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      data
    },
    revalidate: 120
  }
}

export default BlogArticle
