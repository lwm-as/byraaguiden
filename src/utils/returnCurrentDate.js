const returnCurrentDate = () => {
  const monthNames = [
    'Januar',
    'Februrar',
    'Mars',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Desember'
  ]
  const dateObj = new Date()
  const month = monthNames[dateObj.getMonth()]
  const day = String(dateObj.getDate()).padStart(2, '0')
  const year = dateObj.getFullYear()

  return { month, day, year }
}

export default returnCurrentDate
