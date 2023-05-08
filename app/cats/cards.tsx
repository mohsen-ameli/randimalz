"use client"

import { useState } from "react"
import Loading from "./loading"
import { Fact } from "./cat.type"
import Card from "./card"
import fetchCats from "@/lib/cats/fetchCats"

export default function Cards({ initial }: { initial: Fact[] }) {
  const [cats, setCats] = useState(initial)
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const newAnimal = await fetchCats(1)
    setCats(curr => [...curr, newAnimal[0]])
    setLoading(false)
  }

  return (
    <>
      {loading && <Loading />}

      <div className="grid grid-cols-2 gap-4">
        {cats.map((cat, key) => (
          <Card fact={cat} key={key} />
        ))}
      </div>
      <button className="btn-outline btn-info btn my-8" onClick={handleClick}>
        Load More
      </button>
    </>
  )
}
