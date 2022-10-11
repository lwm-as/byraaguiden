import React from 'react'
import Link from 'next/link'
import classNames from 'classnames/bind'

import { ContentsMenuStateProvider } from '../../../context/contentsMenuContext'

import Wysiwyg from '../../common/Wysiwyg/Wysiwyg'

import styles from './HumanSitemap.module.css'

const cx = classNames.bind(styles)

const HumanSitemap = ({ title, content, categories, pages }) => {
  const filteredCategories = categories.edges.filter(category => category.node.name !== 'Blog')
  const filteredPages = pages.edges.filter(
    page => page.node.slug !== 'error' && page.node.seo.metaRobotsNoindex !== 'noindex'
  )

  return (
    <div className={cx('root')}>
      <ContentsMenuStateProvider>
        {title && <h2 className={cx('title')}>{title}</h2>}
        <Wysiwyg>{content}</Wysiwyg>
        <h3 className={cx('group-title')}>Articles</h3>
        {filteredCategories.map(category => (
          <ul key={category.node.slug} className={cx('group-ul')}>
            <h4 className={cx('group-subtitle')}>{category.node.name}</h4>
            {category.node.posts.edges.map(({ node }) => (
              <li className={cx('group-item')} key={node.slug}>
                <Link href={`/${category.node.slug}/${node.slug}`}>
                  <a>{node.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        ))}
        {/* <h3 className={cx('group-title')}>Byarticles</h3>
                    {categories.edges.map((category) =>
                        category.node.posts.edges.length != 0 ? (
                            <ul key={category.node.slug} className={cx('group-ul')}>
                                <h4 className={cx('group-subtitle')}>{category.node.name}</h4>
                                {category.node.cityArticles.edges.map(({ node }) => (
                                    <li className={cx('group-item')} key={node.slug}>
                                        <Link href={`./${category.node.slug}/${node.slug}`}>
                                            <a>{node.title}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                                <ul className={cx('group-ul')}>
                                    <h4 className={cx('group-subtitle')}>{category.node.name}</h4>
                                    <p className={cx('group-not-found')}>
                                        Oops, det finnes ingen byarticles i denne bransjen enda
                </p>
                                </ul>
                            )
                    )} */}
        {/* {categoryPages.edges.length != 0 ? (
                        <>
                            <h3 className={cx('group-title')}>Bransjer</h3>
                            <ul className={cx('group-ul')}>
                                {categoryPages.edges.map(({ node }) => (
                                    <li className={cx('group-item')} key={node.slug}>
                                        <Link href={`./${node.slug}`}>
                                            <a>{node.title}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : null} */}
        <h3 className={cx('group-title')}>Sider</h3>
        <ul className={cx('group-ul')}>
          {pages.edges.length !== 0
            ? filteredPages.map(({ node }) =>
                node.slug === 'homepage' ? (
                  <li className={cx('group-item')} key={node.slug}>
                    <Link href='/'>
                      <a>Hjem</a>
                    </Link>
                  </li>
                ) : (
                  <li className={cx('group-item')} key={node.slug}>
                    <Link href={`/${node.slug}`}>
                      <a>{node.title}</a>
                    </Link>
                  </li>
                )
              )
            : null}
        </ul>
      </ContentsMenuStateProvider>
    </div>
  )
}

export default HumanSitemap
