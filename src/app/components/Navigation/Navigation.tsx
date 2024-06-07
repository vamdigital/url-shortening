'use client'

import Link from 'next/link'
import { useCallback, useState } from 'react'
import { Button } from '../Button/Button'

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const navArray = [
    'Features',
    'Pricing',
    'Resources',
    'Login',
    'Signup'
  ]

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible)
  }, [isVisible])

  const visibityClass = isVisible
    ? 'max-mobile:flex-col'
    : 'max-mobile:hidden'

  return (
    <>
      <div className='absolute right-5 flex lg:hidden'>
        <button type='button' onClick={toggleVisibility}>
          Menu
        </button>
      </div>
      <div
        className={`lg:flex max-mobile:mt-5  max-mobile:rounded-lg max-mobile:bg-d-violet max-mobile:p-5 max-mobile:text-white ${visibityClass} w-full justify-between gap-5`}
      >
        <div className='flex w-full'>
          <ul className='flex w-full items-center gap-5 font-bold text-g-violet max-mobile:flex-col max-mobile:justify-center'>
            {navArray.slice(0, 3).map(nav => (
              <li key={nav}>
                <Link
                  href={`/${nav.toLowerCase()}`}
                  className='hover:text-v-d-blue'
                >
                  {nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex min-w-52 max-mobile:mt-4 max-mobile:w-full max-mobile:border-t-[1px] max-mobile:border-t-l-gray/20 max-mobile:py-4'>
          <ul className='flex w-full items-center justify-end gap-4 font-bold text-g-violet max-mobile:flex-col max-mobile:justify-center'>
            {navArray.slice(3, 4).map(nav => (
              <li key={nav}>
                <Link
                  href={`/${nav.toLowerCase()}`}
                  className='hover:text-v-d-blue'
                >
                  {nav}
                </Link>
              </li>
            ))}
            <li className='max-mobile:flex max-mobile:w-full'>
              <Button
                variant='small'
                className='flex justify-center max-mobile:w-full'
              >
                Sign up
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
