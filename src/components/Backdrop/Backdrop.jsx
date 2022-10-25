// import React, { useEffect, useState } from 'react'
// import styles from './Backdrop.module.css'
// import classNames from 'classnames/bind'
//
// const cx = classNames.bind(styles)
//
// function Backdrop({ compareModalStatus = false, customerModalStatus = false, children }) {
//   const externalStatus = {
//     compareModalStatus,
//     customerModalStatus
//   }
//
//   const [internalStatus, setInternalStatus] = useState({
//     modalOneStatus: false,
//     modalTwoStatus: false
//   })
//
//   useEffect(
//     s => {
//       const clonedInternalStatus = { ...internalStatus }
//       const externalValuesKeys = Object.keys(externalStatus)
//       const internalStatusKeys = Object.keys(internalStatus)
//       for (let i = 0; i < externalValuesKeys.length; i++) {
//         clonedInternalStatus[internalStatusKeys[i]] = externalStatus[externalValuesKeys[i]]
//       }
//       setInternalStatus(clonedInternalStatus)
//     },
//
//     []
//   )
//
//   function handleClick() {
//     console.log('lll')
//   }
//
//   return (
//     <div onClick={() => handleClick()} className={cx('kk')}>
//       {children}
//     </div>
//   )
// }
//
// export default Backdrop
