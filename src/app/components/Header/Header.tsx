import { Logo, Navigation } from '@/components'

export const Header = () => {
  return (
    <header className='flex w-full bg-white py-10 max-mobile:pb-0'>
      <div className='container relative flex w-full lg:items-center max-mobile:flex-col'>
        <div className='flex min-w-[120px] lg:mr-10 max-mobile:flex-col'>
          <Logo />
        </div>
        <Navigation />
      </div>
    </header>
  )
}
