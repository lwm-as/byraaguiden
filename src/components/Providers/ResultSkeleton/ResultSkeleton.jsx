import React from 'react'
import { Skeleton } from '@mui/material'
import classNames from 'classnames/bind'
import styles from './ResultSkeleton.module.css'

const cx = classNames.bind(styles)

const ResultSkeleton = ({ results }) =>
  Array(results)
    .fill(0)
    .map((_, index) => (
      <div key={index} className={cx('outer')}>
        <div className={cx('root')}>
          <Skeleton sx={{ animationDuration: '.6s' }} width='100%' height={600} />
        </div>
        <div style={{ marginTop: '2rem' }} className={cx('root')}>
          <Skeleton sx={{ animationDuration: '.6s' }} width='100%' height={600} />
        </div>
      </div>
    ))

export default ResultSkeleton
