// import React from 'react'
// import classNames from 'classnames/bind'
// import styles from './LandingPageProvider.module.css'
// import Image from '../../common/Image/Image'
// import Button from '../../common/Button/Button'
//
// const cx = classNames.bind(styles)
//
// export default function LandingPageProvider({ idx, provider: { landingpageProvider } }) {
//   return (
//     <div className={cx('relative-container')}>
//       <div className={cx('counter-container')}>
//         <span className={cx('counter')}>{idx}</span>
//       </div>
//       <div className={cx('root')}>
//         <div className={cx('left-content')}>
//           <Image
//             className={cx(
//               'app-image',
//               landingpageProvider.title === 'Babbel' ||
//                 landingpageProvider.title === 'Busuu' ||
//                 landingpageProvider.title === 'Pimsleur'
//                 ? 'spacing'
//                 : ''
//             )}
//             imageData={landingpageProvider?.appInfo?.appLogo}
//           />
//           <div className={cx('middle-content')}>
//             <h3 className={cx('heading')}>
//               {landingpageProvider?.title} Learn Japanese with lessons created by expert teacher
//               <a href={landingpageProvider?.appInfo.appReviewPost.slug}>Read review</a>
//             </h3>
//             <div className={cx('list')}>
//               {landingpageProvider?.appInfo?.appFeatures?.map(({ appFeature }) => (
//                 <ul>
//                   <li>- {appFeature}</li>
//                 </ul>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className={cx('right-content')}>
//           <div className={cx('rating-container')}>
//             <span>{landingpageProvider?.appInfo?.appRating}</span>
//             <div className={cx('rating-stars')}>
//               {Array.from({ length: 5 }).map(() => (
//                 <img
//                   src='http://wp.wp.xn--byrguiden-72a.no/wp-content/uploads/2022/09/Screenshot-2022-09-30-at-15.19.58.png'
//                   alt='Star icon'
//                 />
//               ))}
//             </div>
//           </div>
//           <div className={cx('btn-container')}>
//             <Button size='large' link={landingpageProvider?.appInfo.appVisitUrl}>
//               Visit site
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
