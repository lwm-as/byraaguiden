import graphql from '../lib/api'
import Layout from '../components/layout/Layout/Layout'
import { GET_MISCPAGE_BY_URI } from '../lib/queries/pages/homepage'
import GridHero from '../components/blog/GridHero/GridHero'
import WhatHappensNow from '../components/success/WhatHappensNow/WhatHappensNow'
import Container from '../components/layout/Container/Container'

const Suksess = ({ data }) => {
  const {
    page: { seo },
    headerMenu,
    footerMenu
  } = data

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <GridHero
        width={'max-width'}
        textAlignCenter
        title='Takk for henvendelsen!'
        description='Du vil bli kontaktet av forskjellige byråer innen kort tid.'
      />
      <Container size='medium'>{/*<WhatHappensNow />*/}</Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = {
    id: 'suksess-registrering'
  }
  const data = await graphql(GET_MISCPAGE_BY_URI, variables)

  return {
    props: {
      data
    },
    revalidate: 120
  }
}

export default Suksess
