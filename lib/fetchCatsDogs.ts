import { Fact } from "@/types/Fact.type"
import { GetCats } from "./getCats"
import GetDogs from "./getDogs"

export const dynamic = "force-dynamic"

export default async function fetchCatsDogs(
  type: "cats" | "dogs",
  count: number
) {
  const facts: Fact[] = []

  for (let i = 1; i <= count; i++) {
    if (type === "dogs") {
      const data = await GetDogs()
      facts.push(data)
    } else {
      const data = await GetCats()
      facts.push(data)
    }
  }

  return facts
}
