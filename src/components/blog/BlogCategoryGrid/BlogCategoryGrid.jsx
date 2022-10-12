import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './BlogCategoryGrid.module.css'
import Container from '../../layout/Container/Container'
import GridItem from '../../article/GridItem/GridItem'
import graphql from '../../../lib/api'
import { GET_MORE_POSTS_BY_CATEGORY } from '../../../lib/queries/posts/categories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../common/Button/Button'
import Link from 'next/link'

const cx = classNames.bind(styles)

export default function BlogCategoryGrid({ categories, posts, category, children }) {
  const [preLoadedPosts, setPreLoadedPosts] = useState([])
  const [preLoadedInfo, setPreLoadedInfo] = useState()

  const [info] = useState(posts.pageInfo)

  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    const variables = {
      first: 3,
      after: info.endCursor,
      catName: category.name
    }

    if (posts.nodes.length > 0) {
      await graphql(GET_MORE_POSTS_BY_CATEGORY, variables).then(data => {
        setPreLoadedPosts(data.posts.nodes)
        setPreLoadedInfo(data.posts.pageInfo)
      })
    }
  }, [])

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

  return (
    <div className={cx('root')}>
      <Container size='medium'>
        <div className={cx('inner-container', 'initialPOSTS')}>
          {posts?.nodes
            .filter((post, idx) => post.title !== category.posts.nodes[0].title)
            .map((post, idx) => {
              return <GridItem post={post} />
            })}
        </div>
      </Container>
      <div>{children}</div>
      <Container size='medium'>
        <div className={cx('inner-container')}>
          {preLoadedPosts?.map((post, idx) => {
            return <GridItem post={post} />
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
    </div>
  )
}
