import { z } from 'zod'

export const schema = z.object({
  url: z.string().trim().url({
    message:
      'Invalid url or format eg:(https://www.example.com) '
  })
})
