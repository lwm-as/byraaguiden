import React from 'react'
import classNames from 'classnames/bind'
import styles from './CtaFooterButton.module.css'
import Button from '../common/Button/Button'

const cx = classNames.bind(styles)

function CtaFooterButton({ slug, ctaEnable, isMobile, show }) {
  return (
    <>
      {isMobile && ctaEnable && (
        <div className={cx('cta-footer', { show })}>
          <div className={cx('cta-button-container')}>
            <Button link={`/tilbud?kategori=${slug}`} flex='flex-center' size='large'>
              Få tilbud
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
export default CtaFooterButton
