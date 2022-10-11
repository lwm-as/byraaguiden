import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './TaleOfContent.module.css'
import { useContentsMenuContext } from '../../../../context/contentsMenuContext'
import scrollToPosition from '../../../../utils/scrollToPosition'
import useWindowSize from '../../../../utils/windowSize'

const cx = classNames.bind(styles)

export default function TableOfContent() {
  const { width } = useWindowSize()
  const isMobile = width <= 768

  const [contentsMenu] = useContentsMenuContext()
  const [activeID, setActiveID] = useState(null)

  const [test, setTest] = useState(undefined)

  const handleMenuClick = e => {
    setTest(parseInt(e.target.dataset.id, 10))
    e.preventDefault()
    const current = e.currentTarget
    const { id } = current.dataset
    const scrollElement = document.getElementById(id)
    const elementPosition = scrollElement.offsetTop

    scrollToPosition(elementPosition - 88, 10)
    setActiveID(id)
  }

  // console.log(activeID)

  useEffect(() => {
    // setActiveID(contentsMenu[0]?.id)

    const setActiveMenu = () => {
      contentsMenu.forEach(({ id }, i) => {
        const element = document.getElementById(id)
        const { top = 0 } = element?.getBoundingClientRect() || {}
        const elementTop = window.scrollY + top - 30
        const isActive = window.pageYOffset >= elementTop && window.pageYOffset < elementTop + element?.offsetHeight

        if (isActive) {
          setActiveID(contentsMenu[i]?.id)
        }
      })
    }

    document.addEventListener('load', setActiveMenu)
    document.addEventListener('scroll', setActiveMenu)

    return () => {
      document.removeEventListener('load', setActiveMenu)
      document.removeEventListener('scroll', setActiveMenu)
    }
  }, [contentsMenu])

  let cappedContentsMenu = []

  if (contentsMenu.length > 8) {
    cappedContentsMenu = contentsMenu.slice(0, 8)
  } else {
    cappedContentsMenu = contentsMenu
  }

  return (
    <div className={cx('root')} style={{ display: isMobile ? 'none' : 'block' }}>
      <div className={cx('container')}>
        <div className={cx('heading')}>
          <h4>Table of contents</h4>
        </div>
        <div className={cx('list')}>
          <ul>
            {cappedContentsMenu.map(({ id, text }) => (
              <li className={cx('item', { 'is-active': id === activeID })} key={id}>
                <a href={`#${id}`} data-id={id} className={cx('link')} onClick={handleMenuClick}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
