import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind'

import { useContentsMenuContext } from '../../../context/contentsMenuContext'
import scrollToPosition from '../../../utils/scrollToPosition'

import styles from './ContentsMenu.module.css'

const cx = classNames.bind(styles)

export default function ContentsMenu({ className }) {
  const [contentsMenu] = useContentsMenuContext()
  const [activeID, setActiveID] = useState()

  const handleMenuClick = e => {
    e.preventDefault()
    const current = e.currentTarget
    const { id } = current.dataset
    const scrollElement = document.getElementById(id)
    const elementPosition = scrollElement.offsetTop

    scrollToPosition(elementPosition - 88, 10)
    setActiveID(id)
  }

  useEffect(() => {
    setActiveID(contentsMenu[0]?.id)

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
    <div className={cx('root', className)}>
      <ul className={cx('menu')}>
        {cappedContentsMenu.map(({ id, text }) => (
          <li className={cx('item', { 'is-active': id === activeID })} key={id}>
            <a href={`#${id}`} data-id={id} className={cx('link')} onClick={handleMenuClick}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
