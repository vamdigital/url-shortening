import {
  FormWrapper,
  Hero,
  UrlForm,
  UrlListItem
} from '@/components'
import { shortenUrl } from './actions'

const dummyList = [
  {
    id: 1,
    originalUrl: 'https://www.google.com',
    shortenedUrl: 'https://bit.ly'
  },
  {
    id: 2,
    originalUrl: 'https://www.yahoo.com',
    shortenedUrl: 'https://bit-3.ly'
  }
]
export default function Home() {
  return (
    <>
      <Hero />
      <FormWrapper className='mt-10'>
        <UrlForm />
      </FormWrapper>
      <div className='flex flex-col'>
        {dummyList.map(item => (
          <UrlListItem
            key={item.id}
            originalUrl={item.originalUrl}
            shortenedUrl={item.shortenedUrl}
          />
        ))}
      </div>
    </>
  )
}
