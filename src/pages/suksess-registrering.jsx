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
        title='Takk for henvendelsen!'
        description='Dersom du har noen spørsmål kan du selvfølgelig ta kontakt på kontakt@byråguiden.no'
      />
      <Container size='medium'>
        <WhatHappensNow />
      </Container>
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
    revalidate: 1
  }
}

export default Suksess
