import Layout from '../components/layout/Layout/Layout'
import Container from '../components/layout/Container/Container'
import graphql from '../lib/api'
import { GET_MISCPAGE_BY_URI } from '../lib/queries/pages/homepage'
import GridHero from '../components/blog/GridHero/GridHero'
import Wysiwyg from '../components/common/Wysiwyg/Wysiwyg'
import { ContentsMenuStateProvider } from '../context/contentsMenuContext'
import classNames from 'classnames/bind'
import styles from '../styles/pages/Misc.module.css'

const cx = classNames.bind(styles)

const PrivacyPolicy = ({ data }) => {
  const {
    page: { title, content, seo },
    headerMenu,
    footerMenu
  } = data

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <GridHero title={title} />
      <Container size='medium'>
        <div className={cx('misc-container')}>
          <ContentsMenuStateProvider>
            <Wysiwyg>{content}</Wysiwyg>
          </ContentsMenuStateProvider>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = {
    id: 'personvern'
  }
  const data = await graphql(GET_MISCPAGE_BY_URI, variables)

  return {
    props: {
      data
    },
    revalidate: 120
  }
}

export default PrivacyPolicy
