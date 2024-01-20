/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

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
            "Authorization": `Bearer ${accessToken.access_token}`,
        },
    })
    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const data = await res.json()
    
    return (
        <div className="w-full">
            <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
                <Image 
                    src={data.images.at(0).url} 
                    width={300} 
                    height={300}
                    className='rounded-lg'
                    style={{ maxWidth: '100%', height: '100%' }}>
                </Image>
                <div className="p-2">
                    <h2 className='text-lg mb-3 font-bold'>
                        {data.name}
                    </h2>
                    <p>by {data.artists.at(0).name}</p>
                    <p>{data.tracks.total} songs</p>
                    <p>genres : {data.genres.at(0)}</p>
                </div>
            </div>
        </div>
    )
}
