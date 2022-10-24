import Layout from '../../layout/Layout/Layout'
import GridHero from '../../blog/GridHero/GridHero'
import Container from '../../layout/Container/Container'
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb'
import { ReviewContextProvider } from '../../Cities/ReviewContextProvider'
import ProviderHero from '../ProviderHero/ProviderHero'
import ResultSkeleton from '../ResultSkeleton/ResultSkeleton'
import React from 'react'
import { cx } from '../../../pages/[category]'

export function LoadingPlaceholder(props) {
  return (
    <Layout
      menus={{ headerMenu: props.headerMenu, footerMenu: props.footerMenu }}
      seo={props.seo}
      categories={props.categories}
    >
      <GridHero title={props.categorypage?.herotitle} description={props.categorypage?.herosubtitle} />
      <Container size='medium'>
        <Breadcrumb title={props.title} category={props.category} />
      </Container>
      {props.providers && (
        <ReviewContextProvider providers={props.providers1} cities={props.cities}>
          <Container className={cx('padding-0')} size='medium'>
            <div className={cx('left-col')}>
              <ProviderHero setChangingCity={props.changingCity} />
            </div>
          </Container>
        </ReviewContextProvider>
      )}
      <Container className={cx('skeleton')} size='medium'>
        <ResultSkeleton results={2} />
      </Container>
    </Layout>
  )
}
