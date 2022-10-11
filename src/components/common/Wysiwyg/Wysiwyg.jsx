import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames/bind'

import { useContentsMenuContext } from '../../../context/contentsMenuContext'

import { getTextAndId } from '../../../utils/generateHtmlID'
import assignIDs from '../../../utils/assignID'

import styles from './Wysiwyg.module.css'

const cx = classNames.bind(styles)

const Wysiwyg = ({ children, className, isContentsMenu, customToc }) => {
  const isCustomToc = customToc && customToc.hascustomtoc
  const wysiwygRef = useRef(null)
  const [, setContentsMenu] = useContentsMenuContext()

  const {
    query: { slug: pathname }
  } = useRouter()

  useEffect(() => {
    if (isContentsMenu && !isCustomToc) {
      const element = wysiwygRef?.current

      if (element) {
        const titles = element.querySelectorAll('h2')
        const contentsMenuData = getTextAndId(titles)

        assignIDs(titles, contentsMenuData)
        setContentsMenu(contentsMenuData)
      }
    }
    if (isContentsMenu && isCustomToc) {
      const element = wysiwygRef?.current

      if (element) {
        const titles = element.querySelectorAll('h2')
        const contentsMenuData = getTextAndId(titles, customToc.content)

        assignIDs(titles, contentsMenuData)
        setContentsMenu(contentsMenuData)
      }
    }
  }, [wysiwygRef && pathname])

  return <div ref={wysiwygRef} className={cx('root', className)} dangerouslySetInnerHTML={{ __html: children }} />
}

export default Wysiwyg
