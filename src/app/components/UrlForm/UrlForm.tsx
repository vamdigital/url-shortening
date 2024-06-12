/* eslint-disable require-await */
'use client'
import { SubmitButton } from '../SubmitButton/SubmitButton'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { schema, shortenUrl } from '@/actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useActionState, useRef } from 'react'

export const UrlForm = () => {
  const [state, formAction] = useActionState(shortenUrl, {
    message: '',
    success: false,
    resetKey: Date.now().toString()
  })

  console.log({ state })

  const {
    register,
    formState: { errors },
    clearErrors
  } = useForm<z.infer<typeof schema>>({
    defaultValues: {
      url: ''
    },
    resolver: zodResolver(schema)
  })

  const formRef = useRef<HTMLFormElement>(null)

  const messageColourClass = state.success
    ? 'text-green-500'
    : 'text-red'

  const borderColorClass = errors.url?.message
    ? 'border-red'
    : state.success
      ? 'border-green-500'
      : 'border-gray-300'

  // Todo implement react-hot-toast to show success message
  return (
    <div className='flex-col items-center justify-between md:w-full'>
      <form
        key={state.resetKey}
        ref={formRef}
        action={formAction}
        className='flex items-center justify-between md:w-full'
      >
        <div className='h-11 w-full flex-col items-center justify-center '>
          <label htmlFor='url' className='sr-only'>
            Enter Url
          </label>
          <input
            type='string'
            {...register('url')}
            onFocus={() => clearErrors()}
            id='url'
            placeholder='Shorten a link here...'
            className={`mr-3 min-h-11 border ${borderColorClass} px-3 py-2 md:w-[80%] md:px-5 lg:w-[85%] `}
          />
          <SubmitButton />
        </div>
      </form>

      {errors.url?.message && (
        <p className='flex pt-2 text-sm text-red'>
          {errors.url?.message}
        </p>
      )}

      {state?.message && !errors.url?.message && (
        <p
          className={`flex pt-2 text-sm ${messageColourClass}`}
          aria-live='polite'
          role='status'
        >
          {state.message}
          <br />
          {state.data}
        </p>
      )}
    </div>
  )
}
