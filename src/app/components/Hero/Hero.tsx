import Image from 'next/image'
import { Button } from '../Button/Button'
export const Hero = () => {
  return (
    <div className='relative mt-10 flex w-full lg:mt-20 max-mobile:flex-col'>
      <div className='mt-5 flex flex-col lg:mt-20 lg:w-[80%] max-mobile:order-2 max-mobile:px-3'>
        <div className='container lg:max-w-[600px]'>
          <h1 className='text-4xl font-bold text-v-d-blue  lg:w-[600px] lg:text-7xl lg:leading-[80px] max-mobile:text-center'>
            More than just shorter links
          </h1>
          <p className='my-4 max-w-[500px] text-lg text-l-gray lg:text-xl max-mobile:text-center'>
            Build your brand&apos; recognition and get
            detailed insights on how your links are
            performing.
          </p>
          <div className='mt-5 flex max-mobile:w-full max-mobile:justify-center'>
            <Button variant='large'>Get Started</Button>
          </div>
        </div>
      </div>
      <div className='flex flex-col max-mobile:order-1 max-mobile:px-5'>
        <Image
          src='/illustration-working.svg'
          width={1000}
          height={1000}
          alt='Boost your links'
        />
      </div>
    </div>
  )
}
