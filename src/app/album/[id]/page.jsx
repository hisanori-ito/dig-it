/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import Link from "next/link"

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

export default async function AlbumPage({params}) {
    const albumId = params.id
    const token = await fetch (`https://accounts.spotify.com/api/token`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    })
    const accessToken = await token.json()
    const res = await fetch (`https://api.spotify.com/v1/albums/${albumId}`, {
        headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
        },
    })
    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const data = await res.json()
    
    return (
        <div className="w-full">
            <div className='p-4 md:pt-8 flex justify-evenly flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
                <Link href={data.external_urls.spotify} target="_blank">
                    <Image 
                        src={data.images.at(0).url} 
                        width={300} 
                        height={300}
                        className='rounded-lg hover:opacity-75 transition-opacity duration-300'
                        style={{ maxWidth: '100%', height: '100%' }}>
                    </Image>
                </Link>
                <div className="p-5 m-5">
                    <Link href={data.external_urls.spotify} target="_blank">
                        <h2 className='text-lg mb-3 font-bold hover:text-amber-600'>
                            {data.name}
                        </h2>
                    </Link>
                    <p className="mb-3">
                        <Link href={`/artist/${data.artists.at(0).id}`} className="hover:text-amber-600">
                            <p>{data.artists.at(0).name}</p>
                        </Link>
                    </p>
                    <p className="mb-3">{data.release_date}</p>
                    <p className="mb-3">{`${data.tracks.total}` > 1 ? `${data.tracks.total} songs` : "1 song"} included</p>
                    <p className="mt-10">{data.copyrights.at(0).text}</p>
                </div>
            </div>
        </div>
    )
}
