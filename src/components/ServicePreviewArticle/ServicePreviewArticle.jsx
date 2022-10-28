import classNames from 'classnames/bind'
import styles from '../LanguagePreview/ServicePreview.module.css'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import Button from '../common/Button/Button'
import Link from 'next/link'

const cx = classNames.bind(styles)

export default function ServicePreviewArticle({ services }) {
  const router = useRouter()

  const [service, setService] = useState({})

  // handling of showing correct sercvice preview based on url
  let articleServicePath = router.asPath.split('#')[1]

  useEffect(() => {
    let { name, slug, servicePreviewDescription } =
      services?.nodes.find(
        service =>
          decodeURIComponent(service?.name.toLowerCase().replace(/\s/g, '')) ===
          (router.asPath === '/artikler' ? 'apputvikling' : decodeURIComponent(articleServicePath).replace(/\s/g, ''))
      ) || ''

    setService(prevState => ({
      ...prevState,
      name,
      slug,
      servicePreviewDescription
    }))
  }, [articleServicePath])

  return (
    <div className={cx('root')}>
      <div className={cx('inner-root')}>
        <div className={cx('header')}>
          <h3>De beste {`${service?.name?.toLowerCase()}-byråene i Norge`}</h3>
          <p>{service?.servicePreviewDescription?.serviceDescription}</p>
        </div>
        <div className={cx('btn-container')}>
          <Button link={`/${service?.slug}`}>Sammenlign byråer</Button>
          <Button className={cx('white-bg')} link={`/artikler/${service?.slug}`}>
            Les artikler
          </Button>
        </div>
      </div>
    </div>
  )
}
