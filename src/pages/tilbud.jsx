import graphql from '../lib/api'
import Layout from '../components/layout/Layout/Layout'
import { GET_MISCPAGE_BY_URI } from '../lib/queries/pages/homepage'
import Container from '../components/layout/Container/Container'
import OfferForm from '../components/forms/OfferForm'
import OfferFormCategory from '../components/forms/MeglerForm/OfferFormCategory/OfferFormCategory'
import OfferFormBudget from '../components/forms/OfferFormBudget/OfferFormBudget'
import OfferFormTime from '../components/forms/OfferFormTime/OfferFormTime'
import OfferFormProbability from '../components/forms/OfferFormProbability/OfferFormProbability'

const Offer = ({ data }) => {
  const {
    page: { seo },
    headerMenu,
    footerMenu
  } = data

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <Container size='small'>
        <OfferForm
          initialValues={{
            category: 'Selge bolig',
            address: '',
            postal: '',
            name: '',
            email: '',
            phone: '',
            description: ''
          }}
          bransje='meglere'
        >
          <OfferFormCategory />
          <OfferFormBudget />
          <OfferFormTime />
          <OfferFormProbability />
        </OfferForm>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const variables = {
    id: 'tilbud'
  }
  const data = await graphql(GET_MISCPAGE_BY_URI, variables)

  return {
    props: {
      data
    },
    revalidate: 1
  }
}

export default Offer
