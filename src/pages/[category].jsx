import graphql from '../lib/api'
import { GET_POST, GET_POST_SLUGS } from '../lib/queries/posts/cityPost'
import Layout from '../components/layout/Layout/Layout'
import GridHero from '../components/blog/GridHero/GridHero'
import { ReviewContextProvider } from '../components/Cities/ReviewContextProvider'
import Providers from '../components/Providers/Providers'
import Breadcrumb from '../components/common/Breadcrumb/Breadcrumb'
import React, { useEffect, useState } from 'react'
import Container from '../components/layout/Container/Container'
import { useRouter } from 'next/router'
import classNames from 'classnames/bind'
import styles from '../styles/pages/BlogArticle.module.css'
import ProviderHero from '../components/Providers/ProviderHero/ProviderHero'
import PostContent from '../components/article/PostContent/PostContent'
import { ContentsMenuStateProvider } from '../context/contentsMenuContext'
import CtaFooterButton from '../components/CtaFooterButton/CtaFooterButton'
import useWindowSize from '../utils/windowSize'
import { GET_ALL_CATEGORIES } from '../lib/queries/posts/categories'
import { LoadingPlaceholder } from '../components/Providers/LoadingPlaceholder/LoadingPlaceholder'
import { useCtaToggler } from '../hooks/useCtaToggler'
import Sidebar from '../components/article/Sidebar/Sidebar'
import reducer, { initialState } from '../utils/hooks/stateValueReducer'
import { StateProvider } from '../context/StateValueProvider'
import { slugFactory } from '../utils/slugFactory'

export const cx = classNames.bind(styles)

const CityArticle = ({ data, categories: preFetchedCategories }) => {
  const {
    post: {
      // modifiedGmt,
      ctaEnable: { ctaEnable },
      categorypage,
      content,
      excerpt,
      categories,
      seo,
      author,
      providers: { providers }
    },
    category: {
      posts: { nodes: cityPosts }
    },
    headerMenu,
    footerMenu
  } = data

  // QUICK FIX ON RESOURCE PROBLEM
  // LIMITING PROVIDERS TO 10 & COMMENTING OUT LOAD MORE BUTTON AND COMPARISONS
  // if (providers && providers?.length > 10) providers.length = 10
  // END QUICK FIX PROBLEM

  // state that keeps track when city is changed so that we can show loading screen
  const [changingCity, setChangingCity] = useState(false)

  const router = useRouter()

  const cities = cityPosts?.filter(post => post?.categories.nodes[1].slug === categories.nodes[1].slug) || []

  // // For breadcrumb
  const categoryNameFromUrl =
    router?.asPath.split('/')[1].charAt(0).toUpperCase() + router?.asPath.split('/')[1].slice(1) || ''
  //
  const asPath = decodeURIComponent(router?.asPath) || ''
  //
  // // checking if we are on desired slug
  const digitalMarketing = asPath?.split('/')[1] === decodeURIComponent('digital-markedsføring')
  const graphicDesign = asPath?.split('/')[1] === 'grafisk-design'
  //
  // // adding slug booleans in to an array to run array.some to see which one is true
  const slugArray = [digitalMarketing, graphicDesign] || []
  //
  // // getting total amount (-) is used in slug
  const totalOccurencesOfHyphenInURL = (asPath?.split('/')[1].match(/-/g) || []).length || 0
  //
  // // returned slug by counting hyphens and returning correct format
  const returnedSlug =
    slugFactory({
      asPath,
      digitalMarketing,
      graphicDesign,
      totalOccurencesOfHyphenInURL,
      slugArray
    }) || ''

  const categoryData =
    preFetchedCategories?.categories?.nodes.filter(
      item => decodeURIComponent(item.slug) === returnedSlug?.toLowerCase()
    ) || []

  const isProviders = providers?.length > 0
  const isContent = content != null
  const { isCtaShown } = useCtaToggler(600)

  // run this when changing city
  if (changingCity) {
    return (
      <LoadingPlaceholder
        headerMenu={headerMenu}
        footerMenu={footerMenu}
        seo={seo}
        categories={categories}
        categorypage={categorypage}
        title={categoryNameFromUrl}
        category={data.category}
        providers={isProviders}
        providers1={providers}
        cities={cities}
        changingCity={setChangingCity}
      />
    )
  }
  return (
    <>
      <Layout menus={{ headerMenu, footerMenu }} seo={seo} categories={categories}>
        <GridHero
          smaller={cx('smaller-width')}
          title={categorypage?.herotitle}
          description={categorypage?.herosubtitle}
        />
        <Container size='medium'>
          <Breadcrumb className={cx('less-margin')} title={categories.nodes[1].name} category={data?.category} />
        </Container>
        <Container size='medium' className={cx('split-view', 'padding-0')}>
          <div>
            {isProviders && (
              <ReviewContextProvider providers={providers} cities={cities}>
                <Container size='medium'>
                  <div>
                    <ProviderHero setChangingCity={setChangingCity} />
                  </div>
                </Container>
                <StateProvider initialState={initialState} reducer={reducer}>
                  <Providers />
                </StateProvider>
              </ReviewContextProvider>
            )}
            {isContent && (
              <Container size='medium'>
                <PostContent
                  modifiedGmt={modifiedGmt}
                  noBreadCrumb
                  author={author}
                  excerpt={excerpt}
                  marginBreadCrumb
                  postHeaderIsInside
                  articleTitle={categorypage}
                  post={data?.post}
                />
              </Container>
            )}
          </div>
          <div className={cx('city-side-container')}>
            <div className={cx('inner-container')}>
              <Sidebar ctaEnable={ctaEnable} category={categoryData[0]} />
            </div>
          </div>
          <CtaFooterButton slug={categoryData[0]?.slug} ctaEnable={ctaEnable} show={isCtaShown} />
        </Container>
      </Layout>
    </>
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
    id: decodeURIComponent(params.category)
  }
  const data = await graphql(GET_POST, variables)
  const categories = await graphql(GET_ALL_CATEGORIES)

  return {
    props: {
      data,
      categories
    },
    revalidate: 1
  }
}

export default CityArticle
