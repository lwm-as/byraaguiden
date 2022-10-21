import React from 'react'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../../common/Button/Button'

import styles from './CTASection.module.css'
import { useRouter } from 'next/router'

const cx = classNames.bind(styles)

const CTASection = ({ category }) => {
  const { name, slug } = category
  const router = useRouter()
  const categoryFromUrl = router.asPath.split('/')[1]

  const articlePage = `/tilbud?kategori=${slug}`
  const providerPage = `/tilbud?kategori=${categoryFromUrl}`

  const s = router?.route === '[category]/[slug]' ? articlePage : providerPage

  return (
    <div className={cx('root')}>
      <h3 className={cx('title')}>
        Få gratis og uforpliktende tilbud på {decodeURIComponent(name?.toLowerCase() || categoryFromUrl)}
      </h3>
      {/*<p className={cx('text')}>*/}
      {/*  <i className={cx('icon-container')}>*/}
      {/*    <FontAwesomeIcon className={cx('icon-clock')} icon={['fal', 'clock']} />*/}
      {/*  </i>*/}
      {/*  Få tilbud på 60 sekunder*/}
      {/*</p>*/}
      <ul className={cx('list')}>
        <li className={cx('list-item')}>
          <i className={cx('icon-container', 'check')}>
            <FontAwesomeIcon className={cx('icon')} icon={['fal', 'check']} />
          </i>
          <span>Helt uforpliktende</span>
        </li>
        <li className={cx('list-item')}>
          <i className={cx('icon-container', 'check')}>
            <FontAwesomeIcon className={cx('icon')} icon={['fal', 'check']} />
          </i>
          <span>100% gratis</span>
        </li>
        <li className={cx('list-item')}>
          <i className={cx('icon-container')}>
            <FontAwesomeIcon className={cx('icon', 'check')} icon={['fal', 'check']} />
          </i>
          <span>Byråer tilpasset ditt prosjekt</span>
        </li>
      </ul>
      <Button className={cx('cta-btn')} link={s} flex='flex-center' size='large'>
        Få 3 gratis tilbud
      </Button>
      {/*<p className={cx('disclaimer')}>*/}
      {/*  <FontAwesomeIcon className={cx('icon')} icon={['fal', 'clock']} />*/}
      {/*  <i>Det tar kun 2 minutter</i>*/}
      {/*</p>      {/*<p className={cx('disclaimer')}>*/}
      {/*  <FontAwesomeIcon className={cx('icon')} icon={['fal', 'clock']} />*/}
      {/*  <i>Det tar kun 2 minutter</i>*/}
      {/*</p>*/}
    </div>
  )
}

export default CTASection
