/* eslint-disable react/jsx-key */
import ArtistCard from "./ArtistCard";

export default function AlbumResults({results}) {
  return (
    <div className="sm:grid sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl
    mx-auto py-4">
        {results.map((result) => (
            <ArtistCard key={result.id} result={result} />
        ))}
    </div>
  )
}
