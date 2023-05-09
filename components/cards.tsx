"use client"

import Loading from "@/app/loading"
import Card from "./card"
import { useStore } from "@/context/store"
import fetchCatsDogs from "@/lib/fetchCatsDogs"

export default function Cards({ type }: { type: "cats" | "dogs" }) {
  const loading = useStore(state => state.loading)
  const facts = useStore(state => state.facts)

  const handleClick = async () => {
    useStore.setState({ loading: true })
    const newAnimal = await fetchCatsDogs(type, 1)
    useStore.setState(state => ({
      facts: [...state.facts, newAnimal[0]],
      loading: false,
    }))
  }

  return (
    <>
      {loading && <Loading />}

      <div className="grid grid-cols-2 gap-4">
        {facts.map((cat, key) => (
          <Card fact={cat} key={key} />
        ))}
      </div>

      <button className="btn-outline btn-info btn my-8" onClick={handleClick}>
        Load More
      </button>
    </>
  )
}
