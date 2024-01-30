import Results from '@/components/Results';

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

export default async function SearchPage({ params }) {
  const seachTerm = params.searchTerm;
  const token = await fetch (`https://accounts.spotify.com/api/token`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    })
    const accessToken = await token.json()
    const res = await fetch (`https://api.spotify.com/v1/search?q=${seachTerm}&type=album`, {
        headers: {
            "Authorization": `Bearer ${accessToken.access_token}`,
        },
    })
    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }
    const data = await res.json()
    const results = Object.values(data.albums.items)
  
    return (
      <div>
        <Results results={results} />
      </div>
    )
}

// albumをtrackに変える