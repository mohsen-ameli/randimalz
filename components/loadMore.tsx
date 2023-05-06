"use client"

import { AnimalQuery } from "@/app/Animal.type"
import { fetchAnimals } from "@/lib/animals/fetchAnimals"

const LoadMore = ({ animals }: { animals: AnimalQuery[] }) => {
  const handleClick = async () => {
    const newAnimal = await fetchAnimals(1)
    animals.push(newAnimal[0])
  }

  return (
    <button className="btn-outline btn-info btn my-8" onClick={handleClick}>
      Load More
    </button>
  )
}

export default LoadMore
