/* eslint-disable import/prefer-default-export */
import { Stack } from '@mui/material'
import classNames from 'classnames/bind'
import React from 'react'
import { InputGroupContainer as Input } from '../../../InputGroupContainer/InputGroupContainer'
import styles from './OfferFormRadioField.module.css'

const cx = classNames.bind(styles)

export const OfferFormRadioField = ({ passNameToProvider, ids, fieldsValues, uniqueValues = [], topLabel }) => {
  const keys = Array.from(Array(fieldsValues.length).keys())

  return (
    <>
      <Input name={passNameToProvider} className='column-direction'>
        <Input.Label>{topLabel}</Input.Label>
        <Stack spacing={2} className={cx('root')}>
          {fieldsValues.map((fieldValue, idx) => (
            <Input.RadioList key={keys[idx]} id={ids[idx]} value={uniqueValues[idx] || fieldValue} label={fieldValue} />
          ))}
        </Stack>
      </Input>
    </>
  )
}
