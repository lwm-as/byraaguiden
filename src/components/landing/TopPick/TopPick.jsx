// import React from 'react'
// import classNames from 'classnames/bind'
// import styles from './TopPick.module.css'
// import Image from '../../common/Image/Image'
// import Button from '../../common/Button/Button'
// import { ContentsMenuStateProvider } from '../../../context/contentsMenuContext'
// import Wysiwyg from '../../common/Wysiwyg/Wysiwyg'
//
// const cx = classNames.bind(styles)
//
// export default function TopPick({ landingpageProviders }) {
//   return (
//     <div className={cx('root')}>
//       {landingpageProviders
//         .filter(
//           ({ landingpageProvider }) =>
//             landingpageProvider.title === 'Babbel' ||
//             landingpageProvider.title === 'Busuu' ||
//             landingpageProvider.title === 'Pimsleur'
//         )
//         .map(({ landingpageProvider }, idx) => (
//           <div>
//             <div className={cx('header')}>
//               <div className={cx('first')}>
//                 <div className={cx('counter-container')}>
//                   <span className={cx('counter')}>{idx + 1}</span>
//                 </div>
//                 <Image className={cx('image-logo')} imageData={landingpageProvider?.appInfo?.appLogo} />
//                 <div className={cx('spacer')} />
//                 <span className={cx('title')}>{landingpageProvider?.title}</span>
//               </div>
//               <div className={cx('second')}>
//                 <div className={cx('rating-container')}>
//                   <span>{landingpageProvider?.appInfo?.appRating}</span>
//                   <div className={cx('rating-stars')}>
//                     {Array.from({ length: 5 }).map(() => (
//                       <img
//                         src='http://wp.wp.xn--byrguiden-72a.no/wp-content/uploads/2022/09/Screenshot-2022-09-30-at-15.19.58.png'
//                         alt='Star icon'
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className={cx('divider')} />
//             <div className={cx('cover')}>
//               <Image
//                 className={cx('cover-image')}
//                 imageData={{
//                   sourceUrl:
//                     'http://wp.wp.xn--byrguiden-72a.no/wp-content/uploads/2022/08/Skjermbilde-2022-08-18-kl.-13.20.15.png',
//                   mediaDetails: {
//                     width: 1261,
//                     height: 550
//                   }
//                 }}
//               />
//             </div>
//             <div className={cx('cta-section')}>
//               <div className={cx('cta-text')}>
//                 <span>{landingpageProvider?.appInfo.providerCtaSectionText || 'No data'}</span>
//                 <a href={landingpageProvider?.appInfo.appReviewPost.slug}>Read review</a>
//               </div>
//               <div className={cx('cta-btn-container')}>
//                 <div>
//                   <Button link={landingpageProvider?.appInfo.appVisitUrl} size='large'>
//                     Visit site
//                   </Button>
//                 </div>
//               </div>
//             </div>
//             <div className={cx('features')}>
//               <div className={cx('features-row')}>
//                 <span>Languages available:</span>
//                 <span>{landingpageProvider?.appInfo?.languagesAvailable || 'No data'}</span>
//               </div>
//               <div className={cx('features-row')}>
//                 <span>Learning method:</span>
//                 <span>{landingpageProvider?.appInfo?.learningMethod || 'No data'}</span>
//               </div>
//               <div className={cx('features-row')}>
//                 <span>Oral learning:</span>
//                 <span>{landingpageProvider?.appInfo?.oralLearning || 'No data'}</span>
//               </div>
//             </div>
//             <div className={cx('provider-txt')}>
//               <ContentsMenuStateProvider>
//                 <Wysiwyg>{landingpageProvider?.appInfo.providerText}</Wysiwyg>
//               </ContentsMenuStateProvider>
//             </div>
//             <div className={cx('pros-cons')}>
//               <div>
//                 <span className={cx('pros')}>Pros</span>
//                 <div className={cx('divider', 'pros-divider')} />
//                 <div className={cx('pro-text-container')}>
//                   {landingpageProvider?.appInfo?.pros?.map(({ pro }) => (
//                     <div className={cx('inner-container')}>
//                       <Image
//                         className={cx('icon-plus')}
//                         imageData={{
//                           sourceUrl: 'http://wp.wp.xn--byrguiden-72a.no/wp-content/uploads/2022/09/pros.svg',
//                           mediaDetails: {
//                             height: 14,
//                             width: 13
//                           }
//                         }}
//                       />
//                       <span className={cx('con')}>{pro}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <span className={cx('cons')}>Cons</span>
//                 <div className={cx('divider', 'cons-divider')} />
//                 <div className={cx('cons-text-container')}>
//                   {landingpageProvider?.appInfo?.cons?.map(({ con }) => (
//                     <div className={cx('inner-container')}>
//                       <Image
//                         className={cx('icon-minus')}
//                         imageData={{
//                           sourceUrl: 'http://wp.wp.xn--byrguiden-72a.no/wp-content/uploads/2022/09/cons.svg',
//                           mediaDetails: {
//                             height: 14,
//                             width: 12
//                           }
//                         }}
//                       />
//                       <span className={cx('con')}>{con}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className={cx('cta-box')}>
//               <div>
//                 <Image className={cx('image-logo')} imageData={landingpageProvider?.appInfo?.appLogo} />
//               </div>
//               <div className={cx('btn-container')}>
//                 <Button link={landingpageProvider?.appInfo.appVisitUrl} size='large'>
//                   Visit site
//                 </Button>
//               </div>
//             </div>
//             <div className={cx('divider', 'section-divider')} />
//           </div>
//         ))}
//     </div>
//   )
// }
