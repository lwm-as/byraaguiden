import classNames from 'classnames/bind'
import styles from './ReadMoreGrid.module.css'
import Image from '../../common/Image/Image'
import Link from 'next/link'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

export default function ReadMoreGrid({ setAlreadyShownPosts, category, posts }) {
  let filteredPosts = posts.nodes.filter(post => post.title !== category.posts.nodes[0].title)

  useEffect(() => {
    setAlreadyShownPosts(posts.nodes)
  }, [posts])

  return (
    <div className={cx('root')}>
      {filteredPosts?.map(post => {
        return <GridItem post={post} />
      })}
    </div>
  )
}

export function GridItem({ post }) {
  return (
    <Link href={`/${post.categories.nodes[1].slug}/${post.slug}`}>
      <a>
        <div className={cx('container')}>
          <div className={cx('img-container')}>
            <Image className={cx('image')} imageData={post.featuredImage.node} />
          </div>
          <div className={cx('content')}>
            <h4>{post?.title}</h4>
            {/*<div>{post?.author.node.firstName && <span>by {post.author.node.firstName}</span>} </div>*/}
          </div>
        </div>
      </a>
    </Link>
  )
}
