import graphql from '../lib/api'
import Layout from '../components/layout/Layout/Layout'
import { GET_MISCPAGE_BY_URI } from '../lib/queries/pages/homepage'
import Container from '../components/layout/Container/Container'
import OfferForm from '../components/forms/OfferForm'
import OfferFormCategory from '../components/offerformSteps/OfferFormCategory/OfferFormCategory'
import OfferFormBudget from '../components/offerformSteps/OfferFormBudget/OfferFormBudget'
import OfferFormTime from '../components/offerformSteps/OfferFormTime/OfferFormTime'
import OfferFormProbability from '../components/offerformSteps/OfferFormProbability/OfferFormProbability'
import { useSelector } from '../hooks/tilbud/useSelector'
import OfferFormContactInformation from '../components/offerformSteps/OfferFormContactInformation/OfferFormContactInformation'
import { handleSelecting } from '../components/tilbud/helpers/handleSelecting'
import * as yup from 'yup'
import GridHero from '../components/blog/GridHero/GridHero'
import classNames from 'classnames/bind'
import styles from '../styles/pages/Tilbud/Tilbud.module.css'
import { GET_ALL_CATEGORIES } from '../lib/queries/posts/categories'

const cx = classNames.bind(styles)

const Offer = ({ data, categories }) => {
  const {
    page: { seo },
    headerMenu,
    footerMenu
  } = data

  const {
    OPTIONS,
    categoryGroup,
    budgetGroup,
    timeGroup,
    probabilityGroup,
    toggleCategory,
    toggleBudget,
    toggleTime,
    toggleProbability
  } = useSelector()

  // returns selected checkbox based on boolean values returned from reducer
  const { chosenCategory, chosenBudget, chosenTime, chosenProbability } = handleSelecting(
    categoryGroup,
    budgetGroup,
    timeGroup,
    probabilityGroup,
    OPTIONS
  )

  return (
    <Layout menus={{ headerMenu, footerMenu }} seo={seo}>
      <GridHero
        title='Få tilbud fra dyktige byråer'
        description='Finn byrået som passer dine behov på under 60 sekunder'
        component
        textAlignCenter
        className={cx('less-padding')}
      />
      <Container size='small'>
        <OfferForm
          categories={categories?.categories.nodes}
          selectedValues={{
            category: chosenCategory,
            budget: chosenBudget,
            time: chosenTime,
            probability: chosenProbability
          }}
          initialValues={{
            name: '',
            email: '',
            tlf: '',
            description: ''
          }}
        >
          <OfferFormCategory validate={chosenCategory} group={categoryGroup} toggler={toggleCategory} />
          <OfferFormBudget validate={chosenBudget} group={budgetGroup} toggler={toggleBudget} />
          <OfferFormTime validate={chosenTime} group={timeGroup} toggler={toggleTime} />
          <OfferFormProbability validate={chosenProbability} group={probabilityGroup} toggler={toggleProbability} />
          <OfferFormContactInformation
            validationSchema={yup.object().shape({
              name: yup.string().required('Navn er et obligatorisk felt'),
              email: yup.string().email('Må være en gyldig epost').required('E-post er et obligatorisk felt'),
              tlf: yup
                .string()
                .matches(/^(\+?\d{1,3}|\d{1,4})\d+$/, { message: 'Må være et gyldig nummer' })
                .min(5, 'For kort')
                .max(14, 'For langt')
                .required('Telefonnummer er et obligatorisk felt')
            })}
          />
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
  const categories = await graphql(GET_ALL_CATEGORIES)

  return {
    props: {
      data,
      categories
    },
    revalidate: 1
  }
}

export default Offer
