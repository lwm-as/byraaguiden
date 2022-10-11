import React from 'react'
// import classNames from 'classnames/bind'

import Button from '../../../common/Button/Button'

// import styles from './FormButton.module.css'

// const cx = classNames.bind(styles)

const FormButton = ({ children }) => (
  <Button type='submit' size='large'>
    {children}
  </Button>
)

export default FormButton
