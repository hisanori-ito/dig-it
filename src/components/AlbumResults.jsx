/* eslint-disable react/jsx-key */
import AlbumCard from "./AlbumCard";

export default function AlbumResults({results}) {
  return (
    <div className="sm:grid sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl
    mx-auto py-4">
        {results.map((result) => (
            <AlbumCard key={result.id} result={result} />
        ))}
    </div>
  )
}
