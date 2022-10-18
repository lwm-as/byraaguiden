import React from 'react'
import classNames from 'classnames/bind'
import OfferFormStep from '../../common/OfferFormStep/OfferFormStep'

import styles from './OfferFormCategory.module.css'
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import { useSelector } from '../../../../hooks/tilbud/useSelector'

export const cx = classNames.bind(styles)

const categoryData = categoryGroup => {
  return [
    {
      name: 'newWebsite',
      label: 'Lage ny nettside',
      checked: categoryGroup.newWebsite
    },
    {
      name: 'updateWebsite',

      label: 'Oppdatere eksisterende nettside',
      checked: categoryGroup.updateWebsite
    },
    {
      name: 'createWebStore',
      label: 'Lage ny nettbutikk',
      checked: categoryGroup.createWebStore
    },
    {
      name: 'updateWebStore',
      label: 'Oppdatere eksisterende nettbutikk',
      checked: categoryGroup.updateWebStore
    },
    {
      name: 'other',
      label: 'Annet / usikker',
      checked: categoryGroup.other
    }
  ]
}

const OfferFormCategory = ({ validationSchema }) => {
  const { categoryGroup, toggleCategory } = useSelector()

  const data = categoryData(categoryGroup)

  return (
    <OfferFormStep className={cx('root')} validationSchema={validationSchema}>
      <h1>Hva skal gjøres</h1>
      <p>
        {/*For at vi skal kunne gi deg beste mulig tilbud trenger vi at du forteller oss hvilken meglertjeneste du ønsker å*/}
        {/*få hjelp med.*/}
      </p>

      <div className={cx('checkboxes')}>
        {data.map(({ label, checked, name }) => {
          return (
            <div className={cx('border')}>
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
                      onChange={e => toggleCategory(e)}
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

export default OfferFormCategory
