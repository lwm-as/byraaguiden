import Layout from '../components/layout/Layout/Layout'
import Container from '../components/layout/Container/Container'
import graphql from '../lib/api'
import { HUMAN_SITEMAP_QUERY } from '../lib/queries/pages/homepage'
import GridHero from '../components/blog/GridHero/GridHero'
import { ContentsMenuStateProvider } from '../context/contentsMenuContext'
import Wysiwyg from '../components/common/Wysiwyg/Wysiwyg'
import classNames from 'classnames/bind'
import styles from '../styles/pages/Misc.module.css'
import Link from 'next/link'

const cx = classNames.bind(styles)

const Cookies = ({ data }) => {
  const {
    posts,
    pages,
    categories,
    page: { title, content, seo },
    headerMenu,
    footerMenu
  } = data

  const blogPosts = posts.nodes.filter(post => post.categories.nodes[0].slug === 'artikler')
  const cityPosts = posts.nodes.filter(post => post.categories.nodes[0].slug === 'sted')
  const filteredPages = pages.nodes.map(page => {
    page.slug === 'homepage' ? (page.title = 'Byråguide') && (page.slug = '') : null
    return page
  })

  const indexableBlogPosts = blogPosts.filter(c => c.seo.metaRobotsNoindex === 'index')
  const indexableCityPosts = cityPosts.filter(c => c.seo.metaRobotsNoindex === 'index')
  const indexablePages = filteredPages.filter(c => c.seo.metaRobotsNoindex === 'index')
  const indexableCats = categories.nodes.filter(c => c.seo.metaRobotsNoindex === 'index')

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <GridHero title='Nettstedkart' />
      <Container size='medium'>
        <div className={cx('misc-container')}>
          <ContentsMenuStateProvider>
            <Wysiwyg>{content}</Wysiwyg>
          </ContentsMenuStateProvider>
          <div className={cx('nettsted-outer')}>
            <div className={cx('artikler')}>
              <h3>Artikler</h3>
              <ul>
                {indexableBlogPosts.map(c => (
                  <li>
                    <Link passHref href={`${c.categories.nodes[1].slug}/${c.slug}`}>
                      <a>{c.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx('artikkel-kategorier')}>
              <h3>Kategorier</h3>
              <ul>
                {indexableCats.map(c => (
                  <li>
                    <Link passHref href={`/artikler/${c.slug}`}>
                      <a>{c.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx('bransjer-steder')}>
              <h3>Bransjer og steder</h3>
              <ul>
                {indexableCityPosts.map(c => (
                  <li>
                    <Link passHref href={`/${c.slug}`}>
                      <a>{c.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx('sider')}>
              <h3>Sider</h3>
              <ul>
                {indexablePages.map(c => (
                  <li>
                    <Link passHref href={`/${c.slug}`}>
                      <a>{c.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = {
    pageId: 'nettstedkart'
  }
  const data = await graphql(HUMAN_SITEMAP_QUERY, variables)

  return {
    props: {
      data
    },
    revalidate: 1
  }
}

export default Cookies
