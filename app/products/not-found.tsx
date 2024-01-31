import Link from 'next/link'
 
export default function NotFoundProduct() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center font-heading'>
      <h2 className='text-2xl font-bold'>Not Results</h2>
      <p>No products have been found.</p>
      <p className='text-black/70'>Try changing your search, filters or sort.</p>
      <Link href="/products"
      className='text-iris'>
        Return to products
    </Link>
    </div>
  )
}