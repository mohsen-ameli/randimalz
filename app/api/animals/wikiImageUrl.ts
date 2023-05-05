import { BASE_URL } from "@/data/data"

// Thanks ChatGPT
type QueryResponse = {
  batchcomplete: string
  query: {
    normalized: { from: string; to: string }[]
    pages: {
      [key: string]: {
        ns: number
        title: string
        missing?: string
        known?: string
        imagerepository: string
        imageinfo: {
          url: string
          descriptionurl: string
          descriptionshorturl: string
        }[]
      }
    }
  }
}

// Convert the image name to a full url
export default async function fetchWikiImageUrl(imgUrl: string) {
  const res = await fetch(
    `${BASE_URL}?action=query&titles=Image:${imgUrl}&prop=imageinfo&iiprop=url&format=json&origin=*`
  )

  if (res.status === 200) {
    const data: QueryResponse = await res.json()
    const pages = data.query.pages

    for (const key in pages) {
      const item = pages[key]
      if (
        item.imageinfo[0].url.includes("jpg") ||
        item.imageinfo[0].url.includes("png")
      )
        return item.imageinfo[0].url
    }
  }
}
