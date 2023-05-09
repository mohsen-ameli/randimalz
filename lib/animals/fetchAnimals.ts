import { AnimalQuery } from "@/types/Animal.type"
import axios from "axios"

export const dynamic = "force-dynamic"

export async function fetchAnimals(limit: number) {
  const animals: AnimalQuery[] = []

  for (let i = 0; i < limit; i++) {
    const { data }: { data: AnimalQuery } = await axios.get(
      process.env.API_URL + "/api/animals"
    )
    animals.push(data)
  }

  return animals
}
