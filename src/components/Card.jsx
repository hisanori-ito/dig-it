/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import Image from 'next/image'

export default function Card({result}) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg transition-shadow duration-200'>
        <Link href={`/album/${result.id}`}>
            <Image 
                src={result.images.at(0).url} 
                width={500} 
                height={300}
                className='group-hover:opacity-75 transition-opacity duration-300'>
            </Image>
        </Link>
    </div>
  )
}
