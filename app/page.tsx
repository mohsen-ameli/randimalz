import { INITIAL_CARDS_COUNT } from "@/data/data"
import Card from "@/components/card"
import LoadMore from "@/components/loadMore"
import { fetchAnimals } from "../lib/animals/fetchAnimals"

export default async function Home() {
  const animals = await fetchAnimals(INITIAL_CARDS_COUNT)

  return (
    <div className="flex flex-col items-center">
      {/* Every animal card */}
      <div className="container flex flex-wrap justify-center">
        {animals.map((animal, i) => (
          <Card key={i} randAnimal={animal.randAnimal} />
        ))}
      </div>

      <LoadMore animals={animals} />
    </div>
  )
}

{
  /* <ErrorBoundary>
  <Suspense>
    <Cards />
  </Suspense>
</ErrorBoundary> */
}
