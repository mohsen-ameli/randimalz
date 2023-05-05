import { BASE_URL } from "@/data/data"

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
  const url = `${BASE_URL}?action=query&list=search&srsearch=${title_}&format=json&origin=*`

  const res = await fetch(url)

  if (res.status === 200) {
    const data: QueryResponse = await res.json()

    try {
      return data.query.search[0].title
    } catch (error) {}
  }

  return title
}
