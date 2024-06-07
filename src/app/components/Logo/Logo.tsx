import Image from 'next/image'
export const Logo = () => {
  return (
    <Image
      src='/logo.svg'
      alt='Shortly logo'
      width={120}
      height={50}
    />
  )
}
