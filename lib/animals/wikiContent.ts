import { BASE_URL } from "@/data/data"
import axios from "axios"

export const dynamic = "force-dynamic"

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

  const { data }: { data: QueryResponse } = await axios.get(
    BASE_URL + searchParams
  )
  const description = Object.values(data.query.pages)[0].extract
  return description
}
