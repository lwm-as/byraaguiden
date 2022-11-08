import React, { useEffect, useState } from 'react'

import classNames from 'classnames/bind'
import { useRouter } from 'next/dist/client/router'
import styles from './ServicePreview.module.css'
import useWindowSize from '../../utils/windowSize'
import Button from '../common/Button/Button'

const cx = classNames.bind(styles)

export default function ServicePreview({ services }) {
  const router = useRouter()

  const [service, setService] = useState({})

  const { width } = useWindowSize()
  const isMobile = width < 768

  // handling of showing correct sercvice preview based on url

  const servicePath = router.asPath?.split('/#')[1]

  useEffect(() => {
    let { name, slug, servicePreviewDescription } =
      services?.find(
        service =>
          decodeURIComponent(service?.name.toLowerCase().replace(/\s/g, '')) ===
          (router.asPath === '/' ? 'apputvikling' : decodeURIComponent(servicePath).replace(/\s/g, ''))
      ) || ''

    setService(prevState => ({
      ...prevState,
      name,
      slug,
      servicePreviewDescription
    }))
  }, [servicePath])

  // return <>{service ? <div className={cx('root')}></div> : <p>No post found</p>}</>

  const isTelemarketing = service?.name?.toLowerCase() === 'telemarketing'
  const telemarketingText = isTelemarketing && 'telemarketing-'

  const isRegnskap = service?.name?.toLowerCase() === 'regnskapsfører'
  const regnskapsText = isRegnskap && 'regnskaps'

  const isSEO = service?.name?.toLowerCase() === 'seo'
  const seoText = isSEO && 'SEO-'

  const isDigitalMarketing = decodeURIComponent(service?.name?.toLowerCase()) === 'digital markedsføring'
  const digitalMarketingText = isDigitalMarketing && 'digital markedsførings'

  return (
    <div className={cx('root')}>
      <div className={cx('inner-root')}>
        <h3 className={cx('title')}>
          De beste{' '}
          {`${
            isDigitalMarketing
              ? digitalMarketingText
              : isTelemarketing
              ? telemarketingText
              : isRegnskap
              ? regnskapsText
              : isSEO
              ? seoText
              : service?.name?.toLowerCase()
          }byråene i Norge`}
        </h3>
        <p>{service?.servicePreviewDescription?.serviceDescription}</p>
        <div className={cx('btn-container')}>
          <Button link={`/${service?.slug}`}>Sammenlign byråer</Button>
          <Button className={cx('white-bg')} link={`artikler/${service?.name?.toLowerCase()}`}>
            Les artikler
          </Button>
        </div>
      </div>
    </div>
  )
}
