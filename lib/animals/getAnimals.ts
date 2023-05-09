import { Animal } from "@/types/Animal.type"
import fetchWikiSearch from "@/lib/animals/wikiSearch"
import fetchWikiImages from "@/lib/animals/wikiImages"
import fetchDescription from "@/lib/animals/fetchDescription"
import { allAnimals } from "@/data/all-animals"

export async function GetAnimals(): Promise<Animal | string> {
  const animals = allAnimals as Animal[]
  const rand = Math.floor(Math.random() * animals.length)
  const randAnimal = animals[rand]

  try {
    const search = await fetchWikiSearch(randAnimal.Animal)
    const images = await fetchWikiImages(search)
    const description = await fetchDescription(randAnimal.Animal)

    randAnimal.images = images
    randAnimal.description = description

    return randAnimal
  } catch (error) {
    return error as string
  }
}
