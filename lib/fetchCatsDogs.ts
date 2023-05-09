import { Fact } from "@/types/Fact.type"
import axios from "axios"

export const dynamic = "force-dynamic"

export default async function fetchCatsDogs(
  type: "cats" | "dogs",
  count: number
) {
  const facts: Fact[] = []

  for (let i = 1; i <= count; i++) {
    const res = await axios.get(process.env.API_URL + "/api/" + type)
    if (type === "dogs") {
      const { data }: { data: { facts: Fact } } = res
      facts.push(data.facts)
    } else {
      const { data }: { data: { fact: Fact } } = res
      facts.push(data.fact)
    }
  }

  return facts
}
