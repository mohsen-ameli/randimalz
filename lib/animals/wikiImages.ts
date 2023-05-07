import { BASE_URL } from "@/data/data"
import fetchWikiImageUrl from "./wikiImageUrl"

// Thanks ChatGPT
type QueryResponse = {
  warnings: {
    main: {
      "*": string
    }
  }
  continue: {
    imcontinue: string
    continue: string
  }
  query: {
    pages: {
      [pageId: string]: {
        pageid: number
        ns: number
        title: string
        images: {
          ns: number
          title: string
        }[]
      }
    }
  }
}

// Fetch all images withing a page
export default async function fetchWikiImages(search: string) {
  const urls: string[] = []
  const PIC_SIZE = 256

  const searchParams = new URLSearchParams({
    action: "query",
    titles: search,
    prop: "images",
    pithumbsize: `${PIC_SIZE}`,
    format: "json",
    origin: "*",
  })

  const res = await fetch(BASE_URL + searchParams)
  const data: QueryResponse = await res.json()
  const pages = data.query.pages

  for (const key in pages) {
    const item = pages[key]
    for (const key in item.images) {
      const image = item.images[key].title.split(":")[1]
      const url = await fetchWikiImageUrl(image)
      url && urls.push(url)
    }
  }

  return urls
}
