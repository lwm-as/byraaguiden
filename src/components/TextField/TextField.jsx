/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import classNames from 'classnames/bind'

import { Field } from 'formik'

import styles from './TextField.module.css'
import { useInputGroupContext } from '../InputGroupProvider/InputGroupProvider'

const cx = classNames.bind(styles)

const TextField = ({ className, ...restProps }) => {
  // const idName = `input-${name.replace(/ /g).toLowerCase()}`
  const { data } = useInputGroupContext()
  const { name, id, textarea, placeholder, autoComplete = null, type, labels } = data

  return (
    <>
      <label className={cx('label')} htmlFor={name}>
        {labels}
      </label>
      <Field
        as={textarea ? 'textarea' : 'input'}
        className={cx('root', textarea && 'textArea')}
        type={!textarea ? type : null}
        id={id}
        name={name}
        placeholder={placeholder}
        onFocus={e => (e.target.placeholder = '')}
        onBlur={e => (e.target.placeholder = placeholder)}
        autoComplete={autoComplete && autoComplete}
        {...restProps}
      />
    </>
  )
}

export default TextField
