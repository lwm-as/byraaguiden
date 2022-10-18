import graphql from '../lib/api'
import { GET_POST, GET_POST_SLUGS } from '../lib/queries/posts/cityPost'
import Layout from '../components/layout/Layout/Layout'
import GridHero from '../components/blog/GridHero/GridHero'
import { ReviewContextProvider, useReviewContext } from '../components/Cities/ReviewContextProvider'
import Providers from '../components/Providers/Providers'
import Breadcrumb from '../components/common/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import Container from '../components/layout/Container/Container'
import { useRouter } from 'next/router'

const CityArticle = ({ data }) => {
  const {
    post: {
      categorypage,
      content,
      modifiedGmt,
      excerpt,
      featuredImage,
      categories,
      seo,
      providers: { providers }
    },
    category: {
      posts: { nodes: cityPosts }
    },
    headerMenu,
    footerMenu
  } = data

  const cities = cityPosts.filter(post => post.categories.nodes[1].slug === categories.nodes[1].slug)

  const router = useRouter()

  const categoryName = router?.asPath.split('/')[1].charAt(0).toUpperCase() + router?.asPath.split('/')[1].slice(1)

  const isProviders = providers?.length > 0
  const isContent = content != null

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo} categories={categories}>
      <GridHero title={categorypage.herotitle} description={categorypage.herosubtitle} />
      <Container size='medium'>
        <Breadcrumb title={categoryName} category={data.category} />
      </Container>
      {isProviders && (
        <ReviewContextProvider providers={providers} cities={cities}>
          <Providers />
        </ReviewContextProvider>
      )}
      {/*<CategorypageHero data={categorypage} image={featuredImage}></CategorypageHero>*/}
      {/*{isProviders && (*/}
      {/*  <ReviewContextProvider providers={providers} cities={cities}>*/}
      {/*    <Providers />*/}
      {/*  </ReviewContextProvider>*/}
      {/*)}*/}
      {/*{isContent && (*/}
      {/*  <Container size='medium' className={styles.container}>*/}
      {/*    <ContentsMenuStateProvider>*/}
      {/*      <div className={styles.contentContainer}>*/}
      {/*        <CategoryArticleHero*/}
      {/*          data={categorypage}*/}
      {/*          mod={modifiedGmt}*/}
      {/*          excerpt={excerpt}*/}
      {/*          featuredImage={featuredImage}*/}
      {/*        ></CategoryArticleHero>*/}
      {/*        <Wysiwyg isCategoryArticle={true} isContentsMenu={true}>*/}
      {/*          {content}*/}
      {/*        </Wysiwyg>*/}
      {/*      </div>*/}
      {/*      <ContentsMenu className={styles.sidebarRight} />*/}
      {/*    </ContentsMenuStateProvider>*/}
      {/*  </Container>*/}
      {/*)}*/}
    </Layout>
  )
}

export async function getStaticPaths() {
  const { posts } = await graphql(GET_POST_SLUGS)

  const paths = posts.nodes.map(node => `/${node.slug}`)

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const variables = {
    id: params.category
  }
  const data = await graphql(GET_POST, variables)

  return {
    props: {
      data
    },
    revalidate: 1
  }
}

export default CityArticle
