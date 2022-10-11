/* eslint-disable arrow-body-style */
import { Grid, Stack } from '@mui/material'
import classNames from 'classnames/bind'
import React from 'react'
import { InputGroupContainer as Input } from '../../../InputGroupContainer/InputGroupContainer'
import styles from './FieldGridItem.module.css'
import { returnCorrectFieldType } from './returnCorrectFieldType'

const cx = classNames.bind(styles)

const FieldGridItem = ({ size = [], labels = [], lastFieldIsTextArea, textarea = false, fields }) => {
  const keys = Array.from(Array(fields.length).keys())

  function fieldTypes(field) {
    return returnCorrectFieldType(field)
  }

  return (
    <Grid container className={cx('root')}>
      {fields?.map((field, fieldsIndex, arr) => {
        return (
          <Grid
            key={keys[fieldsIndex]}
            id={cx(`root-child-${fieldsIndex}`)}
            item
            xs={12}
            md={size[fieldsIndex] || 12}
            className={cx('root-child')}
          >
            <Input
              name={field}
              labels={labels[fieldsIndex]}
              textarea={(lastFieldIsTextArea && arr.length - 1 === fieldsIndex ? 'textarea' : null) || textarea}
              placeholder={
                // `Fyll ${labels[fieldsIndex]?.includes('Utfyllende') ? 'ut' : 'inn'} ${labels[
                //   fieldsIndex
                // ]?.toLowerCase()}` || ''
                'Skriv her...'
              }
              type={fieldTypes(field).fieldType}
              className='column-direction'
              autoComplete={fieldTypes(field).autoComplete}
            >
              <Input.TextField />
            </Input>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default FieldGridItem
