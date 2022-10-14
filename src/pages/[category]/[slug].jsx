import graphql from '../../lib/api'
import { GET_POST, GET_POST_SLUGS } from '../../lib/queries/posts/blogPost'

import { ContentsMenuStateProvider } from '../../context/contentsMenuContext'

import useWindowSize from '../../utils/windowSize'

import styles from '../../styles/pages/BlogArticle.module.css'
import Container from '../../components/layout/Container/Container'
import Layout from '../../components/layout/Layout/Layout'
import classNames from 'classnames/bind'
import PostContent from '../../components/article/PostContent/PostContent'
import React, { useState } from 'react'
import Sidebar from '../../components/article/Sidebar/Sidebar'
import SimilarArticles from '../../components/article/SimilarArticles/SimilarArticles'
import FeaturedArticles from '../../components/misc/FeaturedArticles/FeaturedArticles'

const cx = classNames.bind(styles)

const BlogArticle = ({ data }) => {
  const {
    post: { author, excerpt },
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
          <PostContent author={author} excerpt={excerpt} marginBreadCrumb postHeaderIsInside post={post} />
          <div className={cx('side-container')}>
            <div className={cx('inner-container')}>
              {!isMobile && <Sidebar ctaDisabled={post.ctaDisabled} post={post} category={category} />}
              {/*<TableOfContent />*/}
              {!isMobile && posts?.nodes.length > 1 && (
                <SimilarArticles post={data?.post} category={category} posts={posts} />
              )}
            </div>
          </div>
        </ContentsMenuStateProvider>
        <FeaturedArticles post={data?.post} category={category} author={author} posts={posts}>
          Dykk enda dypere i {category.name}
        </FeaturedArticles>
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

  return {
    props: {
      data
    },
    revalidate: 1
  }
}

export default BlogArticle
