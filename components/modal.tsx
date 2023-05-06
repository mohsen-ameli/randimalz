import { Animal } from "@/app/Animal.type"
import fetchWikiContent from "@/lib/animals/wikiContent"
import fetchWikiSearch from "@/lib/animals/wikiSearch"

export default async function Modal({ animal }: { animal: Animal }) {
  const search = await fetchWikiSearch(animal.Animal)
  const description = await fetchWikiContent(search)

  return (
    <div className="cursor-default">
      <input type="checkbox" id="MoreInfoModal" className="modal-toggle" />
      <label htmlFor="MoreInfoModal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">{animal.Animal}</h3>
          <p className="py-4">{description}</p>
        </label>
      </label>
    </div>
  )
}
