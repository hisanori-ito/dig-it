/* eslint-disable react/jsx-key */
import Card from "./card";
import Image from "next/image";

export default function Results({results}) {
  return (
    <div className="sm:grid sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl
    mx-auto py-4">
        {results.map((result) => (
            <Card key={result.id} result={result} />
        ))}
    </div>
  )
}
