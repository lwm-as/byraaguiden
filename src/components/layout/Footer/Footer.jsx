import React from 'react'
import classNames from 'classnames/bind'

import Container from '../Container/Container'
import DomainLogo from '../menus/DomainLogo/DomainLogo'
import FooterSection from '../menus/FooterSection/FooterSection'
import FooterBottom from '../menus/FooterBottom/FooterBottom'

import styles from './Footer.module.css'
import Image from '../../common/Image/Image'
import Link from 'next/link'
import useWindowSize from '../../../utils/windowSize'

const cx = classNames.bind(styles)

function CopyrightContent() {
  return (
    <div>
      <span>Copyright © 2022 byråguiden</span>
    </div>
  )
}

const Footer = ({ footerMenu, isHome }) => {
  const menuItems = footerMenu.menuItems.nodes

  const subItemsMenu = menuItems.filter(item => item.parentId === 'cG9zdDoxMzk=')
  const subItemsServices = menuItems.filter(item => item.parentId === 'cG9zdDoxMzg=')
  const subItemsBottom = menuItems.filter(item => item.parentId === 'cG9zdDoxNTU=')

  const imageData = {
    sourceUrl: 'https://wp.xn--byrguiden-72a.no/wp-content/uploads/2022/10/favicon.png',
    mediaDetails: {
      width: 60,
      height: 60
    },
    altText: 'byråguiden'
  }

  const otherLanguages = [
    {
      flag: 'https://wp.xn--byrguiden-72a.no/wp-content/uploads/2022/10/norsk.svg',
      label: 'Byråguiden NO',
      path: '/'
    },
    {
      flag: 'https://wp.xn--byrguiden-72a.no/wp-content/uploads/2022/10/dansk.svg',
      label: 'Byråguiden DK',
      path: '/'
    },
    {
      flag: 'https://wp.xn--byrguiden-72a.no/wp-content/uploads/2022/10/svensk.svg',
      label: 'Byråguiden SE',
      path: '/'
    },
    {
      flag: 'https://wp.xn--byrguiden-72a.no/wp-content/uploads/2022/10/tysk.svg',
      label: 'Byråguiden DE',
      path: '/'
    }
  ]

  const { width } = useWindowSize()
  const isMobileWidth = width <= 768
  return (
    <>
      <Container size='full' className={cx('footer')}>
        <Container size='medium' className={cx('flex')}>
          <div className={cx('flex-child-1')}>
            <Image imageData={imageData} />
            <span>Stolt over å knytte selskaper sammen</span>
          </div>
          <div className={cx('grid', 'flex-child-2')}>
            <div>
              <FooterSection title='Meny' items={subItemsMenu} />
            </div>
            <div>
              <FooterSection title='Bransjer' items={subItemsServices} />
            </div>
            {/*<div>*/}
            {/*<FooterSection*/}
            {/*  title='Help'*/}
            {/*  items={[*/}
            {/*    {*/}
            {/*      label: 'Hjelpesenter',*/}
            {/*      path: '#'*/}
            {/*    },*/}
            {/*    {*/}
            {/*      label: 'Støtteteam',*/}
            {/*      path: '#'*/}
            {/*    },*/}
            {/*    {*/}
            {/*      label: 'Samfunnet',*/}
            {/*      path: '#'*/}
            {/*    },*/}
            {/*    {*/}
            {/*      label: 'FAQ',*/}
            {/*      path: '#'*/}
            {/*    }*/}
            {/*  ]}*/}
            {/*   items={subItemsContact}*/}
            {/* secondTitle={menuLabels[3].label}*/}
            {/*secondItems={subItemsVisit}*/}
            {/*/>*/}
            {/*</div>*/}
          </div>
        </Container>
        <Container size='medium' className={cx('flex-col')}>
          {/*<div>*/}
          {/*  <p className={cx('text')}>*/}
          {/*    Disclaimer: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque*/}
          {/*    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae*/}
          {/*    vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,*/}
          {/*    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,*/}
          {/*    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora*/}
          {/*    incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum*/}
          {/*    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?*/}
          {/*  </p>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <hr className={cx('rule')} />*/}
          {/*</div>*/}
          {/*<div className={cx('other')}>*/}
          {/*  {otherLanguages.map((data, idx, arr) => {*/}
          {/*    return (*/}
          {/*      <div key={idx} className={cx('sep-container')}>*/}
          {/*        <Link href={data.path}>*/}
          {/*          <a className={cx('other-inner')}>*/}
          {/*            <Image imageData={{ sourceUrl: data?.flag, mediaDetails: { width: 35, height: 25 } }} />*/}
          {/*            <span>{data?.label}</span>*/}
          {/*          </a>*/}
          {/*        </Link>*/}
          {/*        {idx + 1 !== arr.length && !isMobileWidth && (*/}
          {/*          <div className={cx('sep')}>*/}
          {/*            <span>|</span>*/}
          {/*          </div>*/}
          {/*        )}*/}
          {/*      </div>*/}
          {/*    )*/}
          {/*  })}*/}
          {/*</div>*/}
        </Container>
      </Container>
      {/*<Container size='full' className={cx('footer')}>*/}
      {/*  <Container size='large' className={cx('footer-container')}>*/}
      {/*    <div className={cx('footer-logo')}>*/}
      {/*      <DomainLogo isHome={isHome} />*/}
      {/*      <p>*/}
      {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus doloremque maiores nobis*/}
      {/*        optio ratione sapiente. Accusantium, aliquid beatae distinctio doloribus error hic inventore, maxime*/}
      {/*        nesciunt nostrum optio quasi sint!*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <FooterSection title='Meny' items={subItemsMenu} />*/}
      {/*    <FooterSection title='Bransjer' items={subItemsServices} />*/}
      {/*    <FooterSection*/}
      {/*      title={menuLabels[2].label}*/}
      {/*      items={subItemsContact}*/}
      {/*      secondTitle={menuLabels[3].label}*/}
      {/*      secondItems={subItemsVisit}*/}
      {/*/>*/}
      {/*  </Container>*/}
      {/*  <Container size='large' className={cx('bottom-container')}>*/}
      {/*    /!*<FooterBottom privacyItems={subItemsPrivacy} socialItems={subItemsSocial} />*!/*/}
      {/*    <div className={cx('copyright-container')}>*/}
      {/*      <CopyrightContent />*/}
      {/*    </div>*/}
      {/*  </Container>*/}
      {/*</Container>*/}
    </>
  )
}

export default Footer
