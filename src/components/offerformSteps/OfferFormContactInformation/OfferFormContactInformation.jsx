import React from 'react'
import classNames from 'classnames/bind'

import styles from './OfferFormContactInformation.module.css'
import OfferFormStep from '../../forms/common/OfferFormStep/OfferFormStep'
import { useField } from 'formik'
import FormError from '../../forms/common/FormError/FormError'
import { Field } from 'formik'

const cx = classNames.bind(styles)

function TextField({ id = '', name, htmlFor, label, textArea, fullFlex }) {
  const [, form] = useField(name)

  return (
    <>
      <div id={cx(id)} className={cx('input-container', fullFlex)}>
        <label htmlFor={htmlFor}>{label}</label>
        <Field as={textArea ? 'textarea' : 'input'} type='text' name={name} />
        {form.touched && form.error && <FormError error={form.error} />}
      </div>
    </>
  )
}

const OfferFormContactInformation = ({ validationSchema }) => {
  return (
    <OfferFormStep className={cx('root')} validationSchema={validationSchema}>
      <h1>Utfyllende informasjon</h1>

      <div className={cx('root')}>
        <form className={cx('inner-root')}>
          <TextField id='name' name='name' htmlFor='name' label='Navn (Påkrevd)' />
          <div className={cx('flex', 'second-row')}>
            <TextField name='email' htmlFor='email' label='E-postadresse (Påkrevd)' fullFlex='full-flex' />
            <TextField name='tlf' htmlFor='tlf' label='Telefonnummer (Påkrevd)' fullFlex='full-flex' />
          </div>
          <TextField textArea name='description' htmlFor='description' label='Utfyllende informsjon (valgfitt)' />
        </form>
      </div>
    </OfferFormStep>
  )
}

export default OfferFormContactInformation
