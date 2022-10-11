import React from 'react'
import classNames from 'classnames/bind'
import { Field, useField } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import FormError from '../FormError/FormError'

import styles from './FormField.module.css'

const cx = classNames.bind(styles)

const FormField = ({
  name,
  label,
  autoComplete = null,
  type = 'text',
  textarea = false,
  select = false,
  options,
  placeholder = ' ',
  pattern,
  other = false
}) => {
  const [, form] = useField(name)
  const idName = name ? `input-${name.replace(/ /g).toLowerCase()}` : ''
  return (
    <label className={cx('form-label')} htmlFor={idName}>
      <label className={cx('input-label')} htmlFor={idName}>
        <p>{label}</p>
      </label>
      {textarea && (
        <Field
          as='textarea'
          name={name}
          autoComplete={autoComplete && autoComplete}
          className='textarea'
          placeholder={placeholder}
          id={idName}
        />
      )}
      {select && (
        <>
          <Field as='select' name={name} autoComplete={autoComplete && autoComplete} className='select' id={idName}>
            <option value='' disabled>
              {placeholder}
            </option>
            {options.map(({ name: option }) => (
              <SelectOption key={option} value={option} text={option} />
            ))}
            {other && <option value='Annet'>Annet</option>}
          </Field>
          <FontAwesomeIcon className={cx('select-icon')} icon={['fal', 'chevron-down']} color='#2288EF' />
        </>
      )}
      {!textarea && !select && (
        <Field
          as='input'
          type={type}
          name={name}
          autoComplete={autoComplete}
          placeholder={placeholder}
          pattern={pattern && pattern}
          id={idName}
        />
      )}
      {form.touched && form.error && <FormError error={form.error} className={cx('coop-error')} />}
    </label>
  )
}

const SelectOption = ({ value, text }) => <option value={value}>{text}</option>

export default FormField
