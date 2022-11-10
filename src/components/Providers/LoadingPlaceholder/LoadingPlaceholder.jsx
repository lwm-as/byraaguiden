import Layout from '../../layout/Layout/Layout'
import GridHero from '../../blog/GridHero/GridHero'
import Container from '../../layout/Container/Container'
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb'
import { ReviewContextProvider } from '../../Cities/ReviewContextProvider'
import ProviderHero from '../ProviderHero/ProviderHero'
import ResultSkeleton from '../ResultSkeleton/ResultSkeleton'
import React from 'react'
import { cx } from '../../../pages/[category]'
import { Skeleton } from '@mui/material'

export function LoadingPlaceholder({
  seo,
  changingCity,
  cities,
  categories,
  category,
  categorypage,
  footerMenu,
  headerMenu,
  providers,
  providers1,
  title
}) {
  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo} categories={categories}>
      <GridHero title={categorypage?.herotitle} description={categorypage?.herosubtitle} />
      <Container size='medium'>
        <Breadcrumb title={title} category={category} />
      </Container>
      <Container size='medium' className={cx('split-view', 'padding-0')}>
        <div>
          {providers && (
            <ReviewContextProvider providers={providers1} cities={cities}>
              <Container size='medium'>
                <div>
                  <ProviderHero setChangingCity={changingCity} />
                </div>
                <ResultSkeleton results={2} />
              </Container>
            </ReviewContextProvider>
          )}
        </div>
        <div className={cx('skeleton-side-container')}>
          <Skeleton sx={{ animationDuration: '.6s' }} width='100%' height={600} />
        </div>
      </Container>
    </Layout>
  )
}
