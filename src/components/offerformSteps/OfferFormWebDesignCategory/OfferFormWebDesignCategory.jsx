import React from 'react'
import classNames from 'classnames/bind'
import OfferFormStep from '../../forms/common/OfferFormStep/OfferFormStep'

import styles from './OfferFormWebDesignCategory.module.css'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { webDesignCategoryData } from '../stepsDataFunctions'
import { FormStepHeading } from '../FormStepHeading/FormStepHeading'

const cx = classNames.bind(styles)

const OfferFormWebDesignCategory = ({ group, toggler, validate }) => {
  const data = webDesignCategoryData(group)

  return (
    <OfferFormStep className={cx('root')} validate={validate}>
      <FormStepHeading text='Hva trenger du hjelp med?' />
      <div className={cx('checkboxes')}>
        {data.map(({ label, checked, name }) => {
          return (
            <div className={cx({ checked }, 'border')}>
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
    </OfferFormStep>
  )
}

export default OfferFormWebDesignCategory
