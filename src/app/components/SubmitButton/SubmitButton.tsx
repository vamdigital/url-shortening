import { useFormStatus } from 'react-dom'
import { Button } from '../Button/Button'

export const SubmitButton = () => {
  const { pending: isPending } = useFormStatus()
  const pendingClassName = isPending ? 'bg-gray-400' : ''
  return (
    <Button
      variant='small'
      type='submit'
      isRounded={false}
      disabled={isPending}
      className={`h-11  flex-col rounded-lg ${pendingClassName}`}
    >
      {isPending ? 'Shortening' : 'Shorten it!'}
    </Button>
  )
}
