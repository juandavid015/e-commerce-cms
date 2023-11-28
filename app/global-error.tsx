'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className='w-full h-full flex flex-col
    items-center justify-center'>
        <h2 className="text-2xl font-bold"></h2>
        {error.message &&
        <p>{error.message}</p>
        }
        <button 
        className='underline font-bold text-iris'
        onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}