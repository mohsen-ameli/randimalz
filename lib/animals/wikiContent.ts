import { BASE_URL } from "@/data/data"

type QueryResponse = {
  batchcomplete: string
  query: {
    pages: {
      [key: string]: {
        pageid: number
        ns: number
        title: string
        extract: string
      }
    }
  }
}

// Gets the content of the wiki page
export default async function fetchWikiContent(search: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    prop: "extracts",
    exintro: "true",
    explaintext: "true",
    titles: search,
    format: "json",
    origin: "*",
  })

  const res = await fetch(BASE_URL + searchParams)
  if (res.status === 200) {
    const data: QueryResponse = await res.json()
    const description = Object.values(data.query.pages)[0].extract
    return description
  }
}
