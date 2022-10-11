import React from 'react'
import classNames from 'classnames/bind'
import { Field, useField } from 'formik'
import FormError from '../common/FormError/FormError'

import styles from './FormField.module.css'

const cx = classNames.bind(styles)

const FormField = ({
  className,
  label,
  name,
  type,
  textarea = false,
  autoComplete = null,
  placeholder = ' ',
  ...rest
}) => {
  const [, form] = useField(name)
  const idName = `input-${name?.replace(/ /g).toLowerCase()}`
  return (
    <label className={cx('root', className)} htmlFor={idName}>
      <Field
        as={textarea ? 'textarea' : 'input'}
        id={idName}
        name={name}
        type={!textarea ? type : null}
        className={textarea ? cx('textarea') : ''}
        placeholder={placeholder}
        autoComplete={autoComplete && autoComplete}
        {...rest}
      />
      <span>
        <p>{label}</p>
      </span>
      {form.touched && form.error && <FormError error={form.error} />}
    </label>
  )
}

export default FormField
