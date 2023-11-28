import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center font-heading    '>
      <h2 className='text-2xl font-bold'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/"
      className='text-iris'>
        Return Home
    </Link>
    </div>
  )
}