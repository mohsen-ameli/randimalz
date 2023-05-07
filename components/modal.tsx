"use client"

import { Animal } from "@/app/Animal.type"
import fetchWikiContent from "@/lib/animals/wikiContent"
import fetchWikiSearch from "@/lib/animals/wikiSearch"
import { useEffect, useState } from "react"

export default function Modal({ animal }: { animal: Animal }) {
  const [description, setDescription] = useState("")
  const [name, setName] = useState(animal.Animal)

  useEffect(() => {
    async function fetchDescription() {
      const search = await fetchWikiSearch(name)
      const description_ = await fetchWikiContent(search)
      setDescription(description_!)
    }
    fetchDescription()

    return () => {
      setDescription("")
      setName("")
    }
  }, [name])

  return (
    <div className="cursor-default absolute">
      <input type="checkbox" id="MoreInfoModal" className="modal-toggle" />
      <label htmlFor="MoreInfoModal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="py-4">{description}</p>
        </label>
      </label>
    </div>
  )
}
