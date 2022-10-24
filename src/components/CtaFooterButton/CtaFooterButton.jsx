import React from 'react'
import classNames from 'classnames/bind'

import { useRouter } from 'next/dist/client/router'
import styles from './CtaFooterButton.module.css'
import Button from '../common/Button/Button'

const cx = classNames.bind(styles)

function CtaFooterButton({ slug, ctaDisabled, isMobile, show }) {
  const showCTA = !ctaDisabled

  return (
    <>
      {isMobile && showCTA && (
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
