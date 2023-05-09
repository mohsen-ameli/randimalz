import { INITIAL_CARDS_COUNT } from "@/data/data"
import Cards from "@/components/cards"
import StoreInitializer from "@/context/storeInitializer"
import { useStore } from "@/context/store"
import fetchCatsDogs from "@/lib/fetchCatsDogs"

export default async function Cats() {
  const facts = await fetchCatsDogs("cats", INITIAL_CARDS_COUNT)
  useStore.setState({ facts })

  return (
    <div className="flex flex-col items-center">
      <StoreInitializer facts={facts} />
      <Cards type="cats" />
    </div>
  )
}
