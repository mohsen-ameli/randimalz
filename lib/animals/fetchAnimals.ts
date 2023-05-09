import { Animal } from "@/types/Animal.type"
import { GetAnimals } from "./getAnimals"

export const dynamic = "force-dynamic"

export default async function fetchAnimals(limit: number) {
  const animals: Animal[] = []

  for (let i = 0; i < limit; i++) {
    const data = await GetAnimals()
    if (typeof data !== "string") animals.push(data)
  }

  return animals
}
