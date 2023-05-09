import { INITIAL_CARDS_COUNT } from "@/data/data"
import Cards from "@/components/cards"
import StoreInitializer from "@/context/storeInitializer"
import { useStore } from "@/context/store"
import fetchCatsDogs from "@/lib/fetchCatsDogs"

export default async function Dogs() {
  const facts = await fetchCatsDogs("dogs", INITIAL_CARDS_COUNT)
  useStore.setState({ facts })

  return (
    <div className="flex flex-col items-center">
      <StoreInitializer facts={facts} />
      <Cards type="dogs" />
    </div>
  )
}
