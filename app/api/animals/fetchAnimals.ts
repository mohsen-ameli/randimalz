import { AnimalQuery } from "@/app/Animal.type"

export async function fetchAnimals(limit: number) {
  const animals: AnimalQuery[] = []

  for (let i = 0; i < limit; i++) {
    const res = await fetch("http://localhost:3000/api/animals", {
      cache: "no-cache",
    })
    const data: AnimalQuery = await res.json()
    animals.push(data)
  }

  return animals
}
