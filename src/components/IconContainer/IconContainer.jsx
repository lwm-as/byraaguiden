import Image from 'next/image'

const IconContainer = ({ className, src, alt, width, height, onClick }) => {
  return (
    <span className={className} onClick={onClick}>
      <Image src={`/media/icons/${src}`} alt={alt} width={width} height={height} />
    </span>
  )
}

export default IconContainer
