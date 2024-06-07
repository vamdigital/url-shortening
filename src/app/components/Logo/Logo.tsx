import Image from 'next/image'
export const Logo = () => {
  return (
    <Image
      src='/logo.svg'
      alt='Shortly logo'
      width={120}
      priority={true}
      layout='fixed'
      height={50}
    />
  )
}
