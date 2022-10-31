import classNames from 'classnames/bind'
import styles from './OfferFormAppDevelopmentCategory.module.css'
import OfferFormStep from '../../forms/common/OfferFormStep/OfferFormStep'
import { FormStepHeading } from '../FormStepHeading/FormStepHeading'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { appDevelopmentCategoryData } from '../stepsDataFunctions'

const cx = classNames.bind(styles)

export function OfferFormAppDevelopmentCategory({ group, toggler, validate }) {
  const data = appDevelopmentCategoryData(group)

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
