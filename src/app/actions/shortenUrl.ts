/* eslint-disable require-await */
'use server'

import { schema, dummyPromise } from '@/actions'
import axios from 'axios'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const headers = {
  'Content-Type': 'application/json'
  // apikey: 'c6cf084ce033410fb84f3a1283b8ae37'
}

export type FormDataType = {
  url: 'string'
}
const fetcher = async (url: string) => {
  // let endpoint = 'https://api.rebrandly.com/v1/links'
  let endpoint = 'https://api.encurtador.dev/encurtamentos'
  let linkRequest = {
    url
  }
  const apiCall = {
    method: 'post',
    url: endpoint,
    data: linkRequest,
    headers: headers
  }
  let apiResponse = await axios(apiCall)
  let link = apiResponse.data
  return link.urlEncurtada
}

export const shortenUrl = async (
  _prevState: {
    message?: string
    url?: z.infer<typeof schema>
    issues?: string[]
  },
  formData: FormData
) => {
  const formD = Object.fromEntries(formData)
  const result = schema.safeParse(formD)

  // Dumnmy delay in reponse
  await dummyPromise(2000)

  console.log({ result })
  if (!result.success) {
    return {
      success: false,
      message: result.error.errors[0].message,
      resetKey: Date.now().toString()
    }
  }
  try {
    const res = await fetcher(result.data.url)
    revalidatePath('/')
    return {
      success: true,
      message: `successfully shortened ${result.data.url}`,
      data: res,
      resetKey: Date.now().toString()
    }
  } catch (e: unknown) {
    return {
      success: false,
      message: `failed to shorten ${result.error}`,
      resetKey: Date.now().toString()
    }
  }

  // return {
  //   success: true,
  //   message: `successfully shortened ${result.data.url}`,
  //   resetKey: Date.now().toString()
  // }
}
