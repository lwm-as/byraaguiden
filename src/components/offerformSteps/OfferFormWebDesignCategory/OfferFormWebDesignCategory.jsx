import React, { useState } from 'react'
import classNames from 'classnames/bind'
import OfferFormStep from '../../forms/common/OfferFormStep/OfferFormStep'

import styles from './OfferFormWebDesignCategory.module.css'
import { Checkbox, FormControlLabel, FormGroup, Radio } from '@mui/material'
import { webDesignCategoryData } from '../stepsDataFunctions'
import { FormStepHeading } from '../FormStepHeading/FormStepHeading'

const cx = classNames.bind(styles)

const OfferFormWebDesignCategory = ({ group, toggler, validate }) => {
  const data = webDesignCategoryData(group)

  const [error, setError] = useState(false)

  function errorHandling() {
    return error && <p className={cx('error')}>Velg minst 1 alternativ</p>
  }

  return (
    <OfferFormStep className={cx('root')} validate={validate} setError={setError}>
      <FormStepHeading text='Hva trenger du hjelp med?' />
      <div className={cx('checkboxes')}>
        {data.map(({ label, checked, name }) => {
          return (
            <div key={label} className={cx({ checked }, 'border')}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={label}
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
      {error && <p className={cx('error')}>Velg minst 1 alternativ</p>}
    </OfferFormStep>
  )
}

export default OfferFormWebDesignCategory
