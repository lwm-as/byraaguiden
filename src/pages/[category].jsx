import graphql from '../lib/api'
import { GET_POST, GET_POST_SLUGS } from '../lib/queries/posts/cityPost'
import Layout from '../components/layout/Layout/Layout'
import GridHero from '../components/blog/GridHero/GridHero'
import { ReviewContextProvider } from '../components/Cities/ReviewContextProvider'
import Providers from '../components/Providers/Providers'
import Breadcrumb from '../components/common/Breadcrumb/Breadcrumb'
import React, { useState } from 'react'
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

export const cx = classNames.bind(styles)

const CityArticle = ({ data, categories: allCategories }) => {
  const {
    post: {
      ctaDisabled: { ctaDisabled },
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
  } = data || ''

  // state that keeps track when city is changed so that we can show loading screen
  const [changingCity, setChangingCity] = useState(false)

  const router = useRouter()

  const cities = cityPosts.filter(post => post.categories.nodes[1].slug === categories.nodes[1].slug)
  const categoryNameFromUrl =
    router?.asPath.split('/')[1].charAt(0).toUpperCase() + router?.asPath.split('/')[1].slice(1)

  const categoryData =
    allCategories.categories.nodes.filter(item => item.slug === categoryNameFromUrl.toLowerCase())[0] || ''

  const isProviders = providers?.length > 0
  const isContent = content != null

  const { isCtaShown } = useCtaToggler(600)

  const { width } = useWindowSize()
  const isMobile = width <= 1000

  // run this when changin city
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
    <Layout menus={{ headerMenu, footerMenu }} seo={seo} categories={categories}>
      <GridHero title={categorypage?.herotitle} description={categorypage?.herosubtitle} />
      <Container size='medium'>
        <Breadcrumb title={categoryNameFromUrl} category={data.category} />
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
              <Providers />
            </ReviewContextProvider>
          )}
          {isContent && (
            <ContentsMenuStateProvider>
              <PostContent
                noBreadCrumb
                author={author}
                excerpt={excerpt}
                marginBreadCrumb
                postHeaderIsInside
                post={data?.post}
              />
            </ContentsMenuStateProvider>
          )}
        </div>
        <div className={cx('side-container')}>
          <div className={cx('inner-container')}>{!isMobile && <Sidebar category={categoryData} />}</div>
        </div>
        <CtaFooterButton
          slug={decodeURIComponent(categoryData?.slug)}
          isMobile={isMobile}
          ctaDisabled={ctaDisabled}
          show={isCtaShown}
        />
      </Container>
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
