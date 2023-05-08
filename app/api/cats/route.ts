import { NextResponse } from "next/server"

export async function GET() {
  const fact = { fact: "", image: "" }

  // Fetching a random cat fact
  const res1 = await fetch("https://meowfacts.herokuapp.com/", {
    cache: "no-cache",
  })

  if (res1.status === 200) {
    const data = await res1.json()
    fact.fact = data.data
  }

  // Fetching a random cat image
  const res2 = await fetch("https://api.thecatapi.com/v1/images/search", {
    cache: "no-cache",
  })
  if (res2.status === 200) {
    const data = await res2.json()
    fact.image = data[0].url
  }

  return NextResponse.json({
    fact,
  })
}
