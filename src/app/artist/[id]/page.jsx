/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import Link from "next/link"
import ArtistResults from "@/components/ArtistResults"
import AlbumResults from "@/components/AlbumResults"

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

export default async function ArtistPage({params}) {
    const artistId = params.id
    const token = await fetch (`https://accounts.spotify.com/api/token`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    })
    const accessToken = await token.json()
    const res = await fetch (`https://api.spotify.com/v1/artists/${artistId}`, {
        headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
        },
    })
    const res2 = await fetch (`https://api.spotify.com/v1/artists/${artistId}/albums`, {
        headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
        },
    })
    const res3 = await fetch (`https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
        headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
        },
    })
    if(!res.ok || !res2.ok || !res3.ok) {
        throw new Error("Failed to fetch data")
    }
    const data = await res.json()
    const data2 = await res2.json()
    const data3 = await res3.json()

    return (
        <div className="w-full">
          <div className='p-4 md:pt-8 flex flex-col content-center max-w-6xl mx-auto md:space-x-6'>
            <div className="flex justify-evenly">
              <div>
                <Link href={data.external_urls.spotify} target="_blank">
                  <Image 
                    src={data.images.at(0).url} 
                    width={300} 
                    height={300}
                    className='rounded-full hover:opacity-75 transition-opacity duration-300'
                    style={{ maxWidth: '100%', height: '100%' }}>
                  </Image>
                </Link>
              </div>
              <div className="text-center py-10">
                <Link href={data.external_urls.spotify} target="_blank">
                  <h2 className='text-lg font-bold hover:text-amber-600'>
                    {data.name}
                  </h2>
                </Link>
                <p className="m-20">followers {data.followers.total}</p>
              </div>
            </div>
            <div className="text-center m-20">
              <p className="mb-10">related albums ...</p>
              <AlbumResults results={data2.items} />
            </div>
            <div className="text-center mt-0">
              <p className="mb-10">you may also like these artists ...</p>
              <ArtistResults results={data3.artists} />
            </div>
          </div>
        </div>
    )
}
