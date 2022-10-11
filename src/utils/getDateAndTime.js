const getDateAndTime = d => {
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  let day = d.getDate()
  let hour = d.getHours()
  let minute = d.getMinutes()

  /* Set format with two digits for date and time  */
  const checkTime = i => {
    if (i < 10) {
      // eslint-disable-next-line no-param-reassign
      i = `0${i}`
    }
    return i
  }

  year = year.toString().substring(2)
  month = checkTime(month)
  day = checkTime(day)
  hour = checkTime(hour)
  minute = checkTime(minute)

  /** Concatinate date and time into strings */
  const dateStamp = `${day}.${month}.${year}`
  const timeStamp = `${hour}:${minute}`

  return { dateStamp, timeStamp }
}

export default getDateAndTime
