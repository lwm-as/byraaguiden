import React from 'react'
import classNames from 'classnames/bind'

import styles from './OfferFormTime.module.css'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import OfferFormStep from '../../forms/common/OfferFormStep/OfferFormStep'
import { timeData } from '../stepsDataFunctions'
import { FormStepHeading } from '../FormStepHeading/FormStepHeading'

const cx = classNames.bind(styles)

const OfferFormTime = ({ group, toggler, validate }) => {
  const data = timeData(group)

  return (
    <OfferFormStep className={cx('root')} validate={validate}>
      <FormStepHeading text='Når ønsker du å starte prosjektet?' />
      <div className={cx('checkboxes')}>
        {data.map(({ label, checked, name }) => {
          return (
            <div className={cx({ checked }, 'border')}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        '&.Mui-disabled': {
                          color: '#FF4A55'
                        }
                      }}
                      disabled={checked}
                      name={name}
                      checked={checked}
                      onChange={e => toggler(e)}
                    />
                  }
                  label={label}
                />
              </FormGroup>
            </div>
          )
        })}
      </div>
    </OfferFormStep>
  )
}

export default OfferFormTime
