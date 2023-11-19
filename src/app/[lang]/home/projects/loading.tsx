import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => (
  <>
    <div>
      <Skeleton className='w-72 h-5' />
      <br />
      <br />
      <Skeleton className='w-72 sm-smartphone:w-80 h-5' />
      <br />
      <Skeleton className='block sm-smartphone:hidden w-8 h-5 opacity-100' />
    </div>
    <div className='grid md:grid-cols-2 gap-4'>
      <Skeleton className='h-64' />
      <Skeleton className='h-64' />
      <Skeleton className='h-64' />
      <Skeleton className='h-64' />
    </div>
  </>
)

export default Loading
