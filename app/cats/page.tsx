import { INITIAL_CARDS_COUNT } from "@/data/data"
import fetchCats from "@/lib/cats/fetchCats"
import Cards from "./cards"

export default async function Cats() {
  const cats = await fetchCats(INITIAL_CARDS_COUNT)

  return (
    <div className="flex flex-col items-center">
      <Cards initial={cats} />
    </div>
  )
}
