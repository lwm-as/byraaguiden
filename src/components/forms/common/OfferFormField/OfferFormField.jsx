import React from 'react'
import FieldGridItem from '../FieldGridItem/FieldGridItem'

const OfferFormField = ({ textarea, fields, lastFieldIsTextArea, labels, columnSizes }) => (
  <>
    <FieldGridItem
      size={columnSizes}
      labels={labels}
      textarea={textarea}
      lastFieldIsTextArea={lastFieldIsTextArea}
      fields={fields}
    />
  </>
)

export default OfferFormField
