import React, { useState } from 'react'
import classNames from 'classnames/bind'
import emailjs from 'emailjs-com'

import { Form, Formik } from 'formik'
import { object, string } from 'yup'

import Message from '../common/Message/Message'
import FormField from '../common/FormField/FormField'
import FormButton from '../common/FormButton/FormButton'

import styles from './CoopForm.module.css'

const cx = classNames.bind(styles)

const CoopForm = ({ categories }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formFailed, setFormFailed] = useState(false)

  const filteredCategories = categories.nodes.filter(
    category => category.name !== 'Blog' && category.name !== 'Generelt'
  )

  if (isSubmitted) {
    return (
      <Message
        imageUrl='/media/images/form-success.svg'
        title='Takk skal du ha!'
        description='Meldingen din er sendt inn, og du vil innen kort tid bli kontaktet av oss.'
      />
    )
  }

  if (formFailed) {
    return (
      <Message
        imageUrl='/media/images/form-failed.svg'
        title='Noe gikk galt med innsending.'
        description='Vennligst last inn siden på nytt og prøv igjen.'
      />
    )
  }

  return (
    <Formik
      onSubmit={async (values, { resetForm }) => {
        const res = await emailjs.send(
          'service_xwr0fgs',
          'template_dgg9chm',
          { ...values },
          'user_Tf5WUPLO6lS39d5FpP8CE'
        )
        if (res.status === 200) {
          setIsSubmitted(true)
          resetForm()
        } else {
          setFormFailed(true)
        }
      }}
      initialValues={{
        industry: '',
        companyName: '',
        name: '',
        email: '',
        phone: ''
      }}
      validationSchema={object().shape({
        industry: string().required('Venligst velg en bransje').nullable(),
        companyName: string().required('Vennligst fyll inn firmanavn.'),
        name: string().required('Vennligst fyll inn ditt navn.'),
        email: string()
          .email('Dette feltet må inneholde en gyldig epost-adresse.')
          .required('Vennligst fyll inn din epost-adresse.'),
        phone: string()
          .max(8, 'Dette feltet må inneholde et gyldig telefonnummer med 8 siffer.')
          .matches('[0-9]{8}', 'Dette feltet må inneholde et gyldig norsk telefonnummer.')
      })}
    >
      <Form className={cx('root')}>
        <div className={cx('heading')}>
          <h2 className={cx('title')}>Fyll ut skjemaet så tar vi kontakt</h2>
          <p className={cx('subtitle')}>Vi kommer tilbake til deg så fort vi kan.</p>
        </div>
        <div className={cx('row')}>
          <FormField
            name='industry'
            label='Bransje'
            type='select'
            placeholder='Velg bransje'
            select
            options={filteredCategories}
            other
          />
          <FormField name='companyName' label='Firmanavn' autoComplete='organization' placeholder='Firmanavn' />
          <FormField name='name' label='Ditt navn' autocomplete='name' placeholder='Ditt navn' />
        </div>
        <div className={cx('row')}>
          <FormField name='email' label='Epost' autoComplete='email' type='email' placeholder='E-post' />
          <FormField
            name='phone'
            label='Telefonnummer'
            autoComplete='tel'
            type='tel'
            placeholder='Telefonnummer'
            pattern='[0-9]{8}'
          />
          <div className={cx('button-container')}>
            <FormButton>Send inn</FormButton>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default CoopForm
