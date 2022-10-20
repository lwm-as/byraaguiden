import { GET_REGISTERPAGE_BY_URI } from '../lib/queries/pages/homepage'
import graphql from '../lib/api'
import Layout from '../components/layout/Layout/Layout'
import GridHero from '../components/blog/GridHero/GridHero'
import React from 'react'
import excerpts from 'excerpts'
import classNames from 'classnames/bind'
import styles from '../styles/pages/Cooperation.module.css'
import RegisterForm from '../components/register/RegisterForm/RegisterForm'
import Container from '../components/layout/Container/Container'
import ThisIsHowYouRegister from '../components/register/ThisIsHowYouRegister/ThisIsHowYouRegister'
import CommonQuestions from '../components/register/CommonQuestions/CommonQuestions'

const cx = classNames.bind(styles)

CommonQuestions.propTypes = {}
const Cooperation = ({ data }) => {
  const {
    page: {
      content,
      registerCompany: { title, logoslider, registerfaq },
      seo
    },
    headerMenu,
    footerMenu
  } = data

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <GridHero width={cx('max-width')} textAlignCenter title={title} description={excerpts(content)} component />
      <Container size='small'>
        <RegisterForm />
      </Container>
      <Container size='medium'>
        <ThisIsHowYouRegister />
        <CommonQuestions registerfaq={registerfaq} />
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = {
    id: 'registrer-bedrift'
  }
  const data = await graphql(GET_REGISTERPAGE_BY_URI, variables)

  return {
    props: {
      data
    },
    revalidate: 1
  }
}

export default Cooperation
