/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import Image from 'next/image'

export default function AlbumCard({result}) {
  return (
    <div className='group cursor-pointer rounded-full transition-shadow duration-200'>
        <Link href={`/artist/${result.id}`}>
            <Image 
                src={result.images.at(0).url} 
                width={300} 
                height={300}
                className='rounded-full group-hover:opacity-75 transition-opacity duration-300'>
            </Image>
        </Link>
    </div>
  )
}
