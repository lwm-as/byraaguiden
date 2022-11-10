import Layout from '../components/layout/Layout/Layout'
import Container from '../components/layout/Container/Container'
import graphql from '../lib/api'
import { GET_FAQ_BY_URI } from '../lib/queries/pages/homepage'
import GridHero from '../components/blog/GridHero/GridHero'
import CommonQuestions from '../components/register/CommonQuestions/CommonQuestions'
import React from 'react'

const FAQPage = ({ data }) => {
  const {
    page: {
      title,
      content,
      seo,
      faq: { faq }
    },
    headerMenu,
    footerMenu
  } = data

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <GridHero width={'max-width'} textAlignCenter title='Ofte stilte spørsmål' />
      <Container size='medium'>
        <CommonQuestions noHeading registerfaq={faq} />
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = {
    id: 'faq'
  }
  const data = await graphql(GET_FAQ_BY_URI, variables)

  return {
    props: {
      data
    },
    revalidate: 1
  }
}

export default FAQPage
