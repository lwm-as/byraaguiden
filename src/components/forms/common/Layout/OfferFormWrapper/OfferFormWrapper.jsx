import { Stack } from '@mui/material'
import axios from 'axios'
import classNames from 'classnames/bind'
import { useRouter } from 'next/dist/client/router'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import useWindowSize from '../../../../../utils/windowSize'
import StepperComponent from '../../StepperComponent/StepperComponent'
import OfferFormContainer from '../OfferFormContainer/OfferFormContainer'
import OfferFormFooter from '../OfferFormFooter/OfferFormFooter'
import getDateAndTime from '../../../../../utils/getDateAndTime'
import { giveMeCorrectZapierId } from '../../../../../utils/giveMeCorrectZapierId'

import styles from './OfferFormWrapper.module.css'

const cx = classNames.bind(styles)

const OfferFormWrapper = ({ children, initialValues, steps, bransje, ...props }) => {
  const childArray = React.Children.toArray(children)
  const router = useRouter()
  const urlParams = router.asPath.split('/')

  const [step, setStep] = useState(0)
  const currentStep = childArray[step]

  const { width } = useWindowSize()
  const isMobileWidth = width <= 1000

  const isLastStep = () => step === childArray.length - 1

  return (
    <Formik
      {...props}
      initialValues={initialValues}
      onSubmit={async values => {
        if (isLastStep()) {
          const date = new Date()
          const { dateStamp, timeStamp } = getDateAndTime(date)
          const origin = sessionStorage.getItem('__byråguidenOriginPage')
          const trackingTag = sessionStorage.getItem('__byråguidenTrackingTag')

          const dynamicValues = {
            dateStamp,
            timeStamp,
            origin,
            tag: trackingTag || 'Annet',
            device: isMobile ? 'mobile' : 'desktop',
            zapIds: giveMeCorrectZapierId(urlParams[1])
          }

          const data = { ...values, ...dynamicValues }

          // deleting empty data
          delete data.initialValues

          const res = await axios.post('/api/send-lead', data)

          if (res.status === 200) {
            router.push('/suksess')
          }
        } else {
          setStep(s => s + 1)
        }
      }}
      validateOnBlur={false}
      validateOnChange
      validationSchema={currentStep.props.validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={cx('form')}>
          {!isMobileWidth && (
            <div className={cx('form-stepper')}>
              <StepperComponent step={step} steps={steps} />
            </div>
          )}
          <OfferFormContainer>
            <Stack spacing={3} className={cx('root')}>
              {currentStep}
              <OfferFormFooter
                isLastStep={isLastStep()}
                activeStep={step}
                onBack={() => setStep(state => state - 1)}
                isMobile={isMobileWidth}
                isSubmitting={isSubmitting}
                bransje={bransje}
              />
            </Stack>
          </OfferFormContainer>
        </Form>
      )}
    </Formik>
  )
}

export default OfferFormWrapper
