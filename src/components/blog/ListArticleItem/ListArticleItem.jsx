// import Link from 'next/link'
// import React from 'react'
// import classNames from 'classnames/bind'
// import styles from './ListArticleItem.module.css'
// import Image from '../../common/Image/Image'
//
// const cx = classNames.bind(styles)
//
// export default function ListArticleItem({ image, title, slug, excerpt }) {
//   let excerptstr = excerpt
//   if (excerptstr.length > 100) {
//     // eslint-disable-next-line prefer-destructuring
//     excerptstr = `${excerptstr.substring(3, 200)}..`.split('[&hellip;]')[0].replace(/[^A-Za-z]+/g, ' ')
//   }
//
//   const placeholder = {
//     sourceUrl: 'http://wp.wp.xn--byrguiden-72a.no/wp-content/uploads/2022/09/placeholder-image.png',
//     altText: 'Placeholder',
//     mediaDetails: {
//       height: 197,
//       width: 350
//     }
//   }
//
//   return (
//     <Link href={`/${slug}`} passHref>
//       <a className={cx('root')}>
//         <div className={cx('image-container')}>
//           <Image imageData={image?.node || placeholder} />
//         </div>
//         <div className={cx('content')}>
//           <h3 className={cx('title')}>{title}</h3>
//           <p className={cx('excerpt-text')}>{excerptstr}...</p>
//           <p className={cx('read-more')}>
//             <span>Read more</span>
//           </p>
//         </div>
//       </a>
//     </Link>
//   )
// }
