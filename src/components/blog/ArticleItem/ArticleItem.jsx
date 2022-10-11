// import React from 'react'
// import classNames from 'classnames/bind'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//
// import Link from 'next/link'
//
// import styles from './ArticleItem.module.css'
// import Image from '../../common/Image/Image'
//
// const cx = classNames.bind(styles)
//
// const ArticleItem = ({ image = null, className, title, excerpt, slug }) => {
//   let excerptstr = excerpt
//
//   if (excerptstr.length > 100) {
//     excerptstr = `${excerptstr.substring(3, 100)}...`
//   }
//
//   const placeholder = {
//     sourceUrl: 'http://wp.wp.xn--byrguiden-72a.no/wp-content/uploads/2022/09/placeholder-image.png',
//     altText: 'Placeholder',
//     mediaDetails: {
//       width: 351,
//       height: 197
//     }
//   }
//
//   return (
//     <Link href={`/${slug}`} passHref>
//       <a className={cx(className, 'root')}>
//         <div className={cx('image-container')}>
//           <Image imageData={image ? image.node : placeholder} />
//         </div>
//         <div>
//           <h3 className={cx('title')}>{title}</h3>
//           <p className={cx('excerpt-text')}>{excerptstr}</p>
//         </div>
//         <p className={cx('read-more')}>
//           <span>Read article</span>
//         </p>
//       </a>
//     </Link>
//   )
// }
//
// export default ArticleItem
