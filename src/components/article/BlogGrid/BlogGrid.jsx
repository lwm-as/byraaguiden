import classNames from 'classnames/bind'
import styles from './BlogGrid.module.css'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import graphql from '../../../lib/api'
import { GET_MORE_POSTS_BY_CATEGORY } from '../../../lib/queries/posts/categories'
import GridItem from '../GridItem/GridItem'
import Button from '../../common/Button/Button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useWindowSize from '../../../utils/windowSize'
import Container from '../../layout/Container/Container'
import { getCorrectImage } from '../../layout/menus/BurgerMenu/BurgerMenu'

const cx = classNames.bind(styles)

export default function BlogGrid({ categories, posts, category, children }) {
  const [preLoadedPosts, setPreLoadedPosts] = useState([])
  const [preLoadedInfo, setPreLoadedInfo] = useState()
  const router = useRouter()

  const [info] = useState(posts.pageInfo)

  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    const variables = {
      first: 3,
      after: info.endCursor,
      catName: category.name
    }
    await graphql(GET_MORE_POSTS_BY_CATEGORY, variables).then(data => {
      setPreLoadedPosts(data.posts.nodes)
      setPreLoadedInfo(data.posts.pageInfo)
    })
  }, [router])

  const handleClick = async () => {
    setLoading(true)

    const variables = {
      first: 9,
      after: preLoadedInfo?.endCursor,
      catName: category.name
    }
    const data = await graphql(GET_MORE_POSTS_BY_CATEGORY, variables)

    setPreLoadedPosts(state => [...state, ...data?.posts.nodes])
    setPreLoadedInfo(data.posts.pageInfo)
    setLoading(false)
  }

  const { width: windowWidth } = useWindowSize()
  const isMobile = windowWidth < 768

  const filter = categories.categories.nodes.filter(catt => {
    return catt.name !== category.name && catt.name !== 'Alle artikler'
  })

  return (
    <div className={cx('root')}>
      <Container size='medium'>
        <div className={cx('inner-container', 'initialPOSTS')}>
          {posts?.nodes.map((post, idx) => {
            return <GridItem author={post.author} post={post} />
          })}
        </div>
      </Container>
      <div>{children}</div>
      <Container size='medium' className={cx('preloaded-post')}>
        <div className={cx('inner-container')}>
          {preLoadedPosts?.map((post, idx) => {
            return <GridItem noMarginOnFirstItem author={post.author} post={post} />
          })}
        </div>
      </Container>
      {preLoadedInfo?.hasNextPage && (
        <Container size='medium'>
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
        </Container>
      )}
      <Container size='large'>
        <div className={cx('other-services-bar')}>
          <span className={cx('choose-other-service')}>Velg en annen bransje:</span>
          <div className={cx('other-service-bar-inner')}>
            {!isMobile
              ? filter.map(({ name, slug }, i) => {
                  return (
                    <Link href={`/artikler/${slug}`}>
                      <a className={cx('link')}>{name}</a>
                    </Link>
                  )
                })
              : filter.map(({ name, slug }, i) => {
                  return (
                    <Link href={`/artikler/${slug}`}>
                      <a className={cx('service-box')}>
                        <img src={`/media/icons/${getCorrectImage(name)}.svg`} alt='Services' />
                        <span className={cx('link')}>{name}</span>
                      </a>
                    </Link>
                  )
                })}
          </div>
        </div>
      </Container>
    </div>
  )
}
