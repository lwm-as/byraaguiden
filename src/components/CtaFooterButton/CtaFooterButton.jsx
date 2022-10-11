import React from 'react'
import classNames from 'classnames/bind'

import { useRouter } from 'next/dist/client/router'
import styles from './CtaFooterButton.module.css'
import Button from '../common/Button/Button'

const cx = classNames.bind(styles)

function CtaFooterButton({ apps: { nodes }, ctaDisabled, isMobile, show }) {
  const router = useRouter()

  const path = router.asPath?.split('/')[1].split('-').at(0)

  const find = nodes?.find(({ appInfo: { appName } }) => path.toLowerCase() === appName.toLowerCase())

  const showCTA = !ctaDisabled
  return (
    <>
      {isMobile && showCTA && (
        <div className={cx('cta-footer', { show })}>
          <div className={cx('cta-button-container')}>
            <Button link={`${find?.appInfo?.appVisitUrl || '/'}`} flex='flex-center' size='large'>
              Visit {find?.appInfo?.appName || ''}
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
export default CtaFooterButton
