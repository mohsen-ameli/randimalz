import { Fact } from "@/app/cats/cat.type"

export default async function fetchCats(count: number) {
  const facts: Fact[] = []

  for (let i = 1; i <= count; i++) {
    const res = await fetch("http://localhost:3000/api/cats", {
      cache: "no-cache",
    })
    const data: { fact: Fact } = await res.json()
    facts.push(data.fact)
  }

  return facts
}
