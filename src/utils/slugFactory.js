export const slugFactory = ({ asPath, digitalMarketing, graphicDesign, totalOccurencesOfHyphenInURL, slugArray }) => {
  if (totalOccurencesOfHyphenInURL === 0) {
    return asPath.split('/')[1]
  } else if (totalOccurencesOfHyphenInURL === 1 && !digitalMarketing && !graphicDesign) {
    return asPath.split('/')[1].split('-')[0]
  } else if (totalOccurencesOfHyphenInURL === 1 && slugArray.some(item => item === true)) {
    return asPath.split('/')[1]
  } else if (totalOccurencesOfHyphenInURL === 2) {
    return asPath.split('/')[1].split('-').slice(0, 2).join('-')
  } else if (totalOccurencesOfHyphenInURL === 3) {
    return asPath.split('/')[1].split('-')[0]
  }
}
