/* eslint-disable arrow-body-style */
import classNames from 'classnames/bind'
import React from 'react'
import OfferFormField from '../../common/OfferFormField/OfferFormField'
import OfferFormStep from '../../common/OfferFormStep/OfferFormStep'
import styles from './OfferFormContactInformation.module.css'

const cx = classNames.bind(styles)

const OfferFormContactInformation = ({
  heading,
  validationSchema,
  fields,
  headingDescription,
  labels,
  lastFieldIsTextArea,
  columnSizes
}) => {
  return (
    <OfferFormStep className={cx('root')} validationSchema={validationSchema}>
      <h1>{heading}</h1>
      <p>{headingDescription}</p>
      <OfferFormField
        fields={fields}
        labels={labels}
        columnSizes={columnSizes}
        lastFieldIsTextArea={lastFieldIsTextArea}
      />
    </OfferFormStep>
  )
}

export default OfferFormContactInformation
