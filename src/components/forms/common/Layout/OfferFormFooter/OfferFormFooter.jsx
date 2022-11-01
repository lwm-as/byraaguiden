import CircularProgress from '@mui/material/CircularProgress'
import classNames from 'classnames/bind'
import React from 'react'
import Button from '../../../../common/Button/Button'
import styles from './OfferFormFooter.module.css'
import StepperComponent from '../../StepperComponent/StepperComponent'

const cx = classNames.bind(styles)

export default function OfferFormFooter({ validate, activeStep, onBack, isLastStep, isMobile, isSubmitting, step }) {
  const isMobileBtn = isMobile && activeStep === 0

  return (
    <div className={cx('root')}>
      <div
        className={cx(
          'btn-container',
          !activeStep > 0 ? 'btn-flex-end' : 'btn-justify-space-between',
          isMobileBtn ? 'btn-flex-center' : null
        )}
      >
        {activeStep > 0 && (
          <div>
            <Button size={isMobile ? 'medium' : 'large'} onClick={onBack} className={cx('prevBtn')}>
              Tilbake
            </Button>
          </div>
        )}
        <div>
          {!isSubmitting ? (
            <Button
              disabled={validate === undefined || isSubmitting}
              size={isMobileBtn ? 'xlarge' : 'large'}
              type='submit'
              className={cx('nextBtn')}
            >
              {isLastStep ? 'Send' : 'Neste'}
            </Button>
          ) : (
            <Button
              disabled={isSubmitting}
              size={isMobileBtn ? 'xlarge' : 'large'}
              className={cx('nextBtn', 'circularBtn')}
            >
              <CircularProgress size={20} thickness={5} sx={{ fontSize: '11px', color: '#FFFF', padding: '0px' }} />
            </Button>
          )}
        </div>
      </div>
      <div className={cx('form-stepper')}>
        <StepperComponent step={step + 1} />
      </div>

      <div className={cx('bottom-txt')}>
        <p className={cx('disclaimer')}>
          informasjonen du sender inn går direkte til byråene.
          <br /> Sensitiv informasjon lagres ikke.
        </p>
      </div>
    </div>
  )
}
