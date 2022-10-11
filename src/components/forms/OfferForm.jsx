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
import StepperComponent from './common/StepperComponent/StepperComponent'
import styles from './OfferForm.module.css'

const cx = classNames.bind(styles)

function OfferForm({ children, initialValues, steps, bransje, ...props }) {
  const childArray = React.Children.toArray(children)
  const router = useRouter()
  const urlParams = router.asPath.split('/')

  const [step, setStep] = useState(0)
  const currentStep = childArray[step]

  const { width } = useWindowSize()
  const isMobileWidth = width <= 1000

  const isLastStep = () => step === childArray.length - 1
  return (
    <div className={cx('form-div')}>
      <Formik
        {...props}
        initialValues={initialValues}
        onSubmit={async values => {
          if (isLastStep()) {
            const date = new Date()
            const { dateStamp, timeStamp } = getDateAndTime(date)
            const origin = sessionStorage.getItem('__byråguidenOriginPage')
            const trackingTag = sessionStorage.getItem('__byråguidenTrackingTag')

            const { postal } = values

            const location = getLocation(postal)

            const dynamicValues = {
              dateStamp,
              timeStamp,
              origin,
              tag: trackingTag || 'Annet',
              device: isMobile ? 'mobile' : 'desktop',
              zapierHookId: getZapierHookId(urlParams[1])
            }
            const data = { ...values, location, ...dynamicValues }

            const res = await axios.post('/api/send-lead', data)

            if (res.status === 200) {
              router.push(`/${urlParams[1]}/suksess`)
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
            <Stack spacing={3} alignItems='center'>
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
            </Stack>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default OfferForm
