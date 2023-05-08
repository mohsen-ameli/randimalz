"use client"

import { useState } from "react"
import Card from "./card"
import { AnimalQuery } from "./Animal.type"
import { fetchAnimals } from "@/lib/animals/fetchAnimals"
import Loading from "./loading"

export default function Cards({ initial }: { initial: AnimalQuery[] }) {
  const [animals, setAnimals] = useState(initial)
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const newAnimal = await fetchAnimals(1)
    setAnimals(curr => [...curr, newAnimal[0]])
    setLoading(false)
  }

  return (
    <>
      {loading && <Loading />}

      {/* Every animal card */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {animals.map((animal, i) => (
          <Card key={i} randAnimal={animal.randAnimal} />
        ))}
      </div>

      <button className="btn-outline btn-info btn my-8" onClick={handleClick}>
        Load More
      </button>
    </>
  )
}
