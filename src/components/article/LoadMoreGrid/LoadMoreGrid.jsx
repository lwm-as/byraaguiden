import classNames from 'classnames/bind'
import styles from './LoadMoreGrid.module.css'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import graphql from '../../../lib/api'
import { GET_MORE_POSTS_BY_CATEGORY } from '../../../lib/queries/posts/categories'
import { GridItem } from '../ReadMoreGrid/ReadMoreGrid'
import Button from '../../common/Button/Button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useWindowSize from '../../../utils/windowSize'

const cx = classNames.bind(styles)

export default function LoadMoreGrid({ categories, alreadyShownPosts, category, posts }) {
  const [fetchedPosts, setFetchedPosts] = useState(posts.nodes)
  const [info, setInfo] = useState(posts.pageInfo)
  const [loading, setLoading] = useState(false)

  let some = fetchedPosts.filter(post => {
    alreadyShownPosts?.some(shownPost => post.title !== shownPost.title)
  })

  const {
    query: { slug: pathName }
  } = useRouter()

  useEffect(() => {
    setInfo(posts.pageInfo)
    setFetchedPosts(posts.nodes)
  }, [pathName])

  const handleClick = async () => {
    setLoading(true)
    const variables = {
      first: 9,
      after: info.endCursor,
      catName: category.name
    }

    const data = await graphql(GET_MORE_POSTS_BY_CATEGORY, variables)

    setFetchedPosts(state => [...state, ...data.posts.nodes])
    setInfo(data.posts.pageInfo)
    setLoading(false)
  }

  const { width: windowWidth } = useWindowSize()
  const isMobile = windowWidth < 768

  return (
    <>
      {/*{some.length > 0 && (*/}
      <div className={cx('root')}>
        <div className={cx('inner-container')}>
          {fetchedPosts?.map(post => {
            return <GridItem post={post} />
          })}
        </div>
        <div className={cx('btn-container')}>
          <div className={cx('inner-btn-container')}>
            <div>
              <Button disabled={loading} onClick={handleClick} className={cx('btn')}>
                {loading ? 'Laster inn fler' : 'Last inn fler'}
              </Button>
            </div>
          </div>
          <div className={cx('all-articles')}>
            <div className={cx('all-articles-inner')}>
              <a href='/artikler'>Alle artikler</a>
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </div>
          </div>
        </div>
        <div className={cx('other-services-bar')}>
          <span>Velg en annen bransje:</span>
          {categories.categories.nodes
            .filter(catt => catt.name !== category.name && catt.name !== 'Artikler')
            .map(({ name, slug }, i) => {
              return (
                <Link href={`/${slug}`}>
                  <a>
                    {name} &nbsp;{' '}
                    {!isMobile && i < categories.categories.nodes.length - 2 ? (
                      <span className={cx('pipeline')}>|</span>
                    ) : (
                      ''
                    )}{' '}
                    &nbsp;
                  </a>
                </Link>
              )
            })}
        </div>
      </div>
      {/*)}*/}
      {/*{!some.length > 0 && (*/}
      {/*  <div className={cx('other-services-bar')}>*/}
      {/*    <span className={cx('choose-another-branch')}>Velg en annen bransje: &nbsp;</span>*/}
      {/*    {categories.categories.nodes*/}
      {/*      .filter(catt => catt.name !== category.name && catt.name !== 'Artikler')*/}
      {/*      .map(({ name, slug }, i) => {*/}
      {/*        return (*/}
      {/*          <Link href={`/${slug}`}>*/}
      {/*            <a className={cx('a-tag')}>*/}
      {/*              {name} &nbsp;*/}
      {/*              {!isMobile && i < categories.categories.nodes.length - 2 ? (*/}
      {/*                <span className={cx('pipeline')}>|</span>*/}
      {/*              ) : (*/}
      {/*                ''*/}
      {/*              )}*/}
      {/*              &nbsp;*/}
      {/*            </a>*/}
      {/*          </Link>*/}
      {/*        )*/}
      {/*      })}*/}
      {/*  </div>*/}
      {/*)}*/}
    </>
  )
}
