import fetchWikiContent from "./wikiContent"
import fetchWikiSearch from "./wikiSearch"

export default async function fetchDescription(animal: string) {
  const search = await fetchWikiSearch(animal)
  const description = await fetchWikiContent(search)
  return description
}
