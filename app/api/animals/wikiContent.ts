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
  const res = await fetch(
    `${BASE_URL}?action=query&prop=extracts&exintro=&explaintext=&titles=${search}&format=json&origin=*`
  )
  if (res.status === 200) {
    const data: QueryResponse = await res.json()
    const description = Object.values(data.query.pages)[0].extract
    return description
  }
}
