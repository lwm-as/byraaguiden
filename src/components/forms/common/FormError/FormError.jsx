import React from 'react'
import classNames from 'classnames/bind'

import styles from './FormError.module.css'

const cx = classNames.bind(styles)

const FormError = ({ error, className }) => <span className={cx('root', className)}>{error}</span>

export default FormError
