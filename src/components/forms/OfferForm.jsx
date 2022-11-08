import { Stack } from '@mui/material'
import axios from 'axios'
import classNames from 'classnames/bind'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import getDateAndTime from '../../utils/getDateAndTime'
import getLocation from '../../utils/getLocation'
import getZapierHookId from '../../utils/getZapierHookId'
import useWindowSize from '../../utils/windowSize'
import OfferFormContainer from './common/Layout/OfferFormContainer/OfferFormContainer'
import OfferFormFooter from './common/Layout/OfferFormFooter/OfferFormFooter'
import styles from './OfferForm.module.css'
import OfferFinalStep from '../offerformSteps/OfferFinalStep/OfferFinalStep'

const cx = classNames.bind(styles)

function OfferForm({
  setShowFinalStep,
  children,
  initialValues,
  selectedValues,
  categories,
  setError,
  steps,
  ...props
}) {
  const childArray = React.Children.toArray(children)
  const router = useRouter()

  const categoryFromURL = router.asPath?.split('?')[1]?.split('=')[1]

  const currentCategory = categories?.find(({ slug }) => {
    return decodeURIComponent(slug) === decodeURIComponent(categoryFromURL)
  })

  const providerNames =
    currentCategory?.providerCategory?.providerCategory
      ?.map(({ providerContact }) => providerContact?.chooseProvider?.providersInfo)
      ?.map(({ name }) => name) || []

  const providerEmails =
    currentCategory?.providerCategory?.providerCategory?.map(({ providerContact }) => providerContact.providerEmail) ||
    []

  const creatKeyValuePairsForNames = () => {
    return providerNames.map((data, i) => ({
      [decodeURIComponent(`Byrå${i + 1}`)]: data
    }))
  }

  const [step, setStep] = useState(0)
  const currentStep = childArray[step]

  const { width } = useWindowSize()
  const isMobileWidth = width <= 1000

  const date = new Date()
  const { dateStamp } = getDateAndTime(date)

  const isLastStep = () => step === childArray.length - 1
  return (
    <div className={cx('form-div')}>
      <Formik
        {...props}
        initialValues={initialValues}
        onSubmit={async values => {
          if (isLastStep()) {
            const dynamicValues = {
              dateStamp,
              zapierHookId: '8671498/b00y69a',
              providers: creatKeyValuePairsForNames(),
              providerEmails
            }

            const data = { ...values, ...selectedValues, ...dynamicValues }

            const res = await axios.post('/api/send-lead', data)

            if (res.status === 200) {
              setShowFinalStep(true)
              await router.push(`/suksess`)
            }
          } else {
            setStep(s => s + 1)
          }
        }}
        validateOnBlur={false}
        validateOnChange
        validationSchema={currentStep?.props?.validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className={cx('form')}>
            <OfferFormContainer>
              <Stack sx={{ paddingTop: '2rem !important' }} spacing={3} className={cx('root')}>
                {currentStep}
                <OfferFormFooter
                  setError={currentStep?.props?.setError}
                  isLastStep={isLastStep()}
                  activeStep={step}
                  onBack={() => setStep(state => state - 1)}
                  isMobile={isMobileWidth}
                  isSubmitting={isSubmitting}
                  validate={currentStep?.props?.validate}
                  step={step}
                />
              </Stack>
            </OfferFormContainer>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default OfferForm
