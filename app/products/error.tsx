'use client' // Error components must be Client Components
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  const router = useRouter();

  return (
    <div className='w-full h-full flex flex-col
    items-center justify-center'>
      <h2 className='text-2xl font-bold'>Something went wrong!</h2>
      {error.message &&
        <p>{error.message}</p>
      }
      <button
      className='underline font-bold text-iris'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      or
      <button onClick={()=> router.push('/')}
      className='underline font-bold text-iris'
      >
        Return home
      </button>
    </div>
  )
}