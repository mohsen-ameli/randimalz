import { INITIAL_CARDS_COUNT } from "@/data/data"
import { fetchAnimals } from "@/lib/animals/fetchAnimals"
import Cards from "./cards"

export default async function Home() {
  const initialAnimals = await fetchAnimals(INITIAL_CARDS_COUNT)

  return (
    <div className="flex flex-col items-center">
      <Cards initial={initialAnimals} />
    </div>
  )
}
