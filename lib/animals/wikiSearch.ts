import { BASE_URL } from "@/data/data"
import axios from "axios"

export const dynamic = "force-dynamic"

// Thanks ChatGPT
type QueryResponse = {
  batchComplete: string
  continue: {
    srOffset: number
    continue: string
  }
  query: {
    searchInfo: {
      totalHits: number
      suggestion: string
      suggestionSnippet: string
    }
    search: {
      ns: number
      title: string
      pageId: number
      size: number
      wordCount: number
      snippet: string
      timestamp: string
    }[]
  }
}

// Search wikipedia based on the given title
export default async function fetchWikiSearch(title: string) {
  const title_ = title.toLowerCase().replaceAll(" ", "_")

  const searchParams = new URLSearchParams({
    action: "query",
    list: "search",
    srsearch: title_,
    format: "json",
    origin: "*",
  })

  const { data }: { data: QueryResponse } = await axios.get(
    BASE_URL + searchParams
  )
  return data.query.search[0].title
}
