import axios from "axios"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

type Data1Type = {
  data: {
    data: string[]
  }
}

type Data2Type = {
  data: [
    {
      id: string
      url: string
      width: number
      height: number
    }
  ]
}

export async function GET() {
  const fact = { fact: "", image: "" }

  // Fetching a random cat fact
  const { data: data1 }: Data1Type = await axios.get(
    "https://meowfacts.herokuapp.com/"
  )
  fact.fact = data1.data[0]

  // Fetching a random cat image
  const { data: data2 }: Data2Type = await axios.get(
    "https://api.thecatapi.com/v1/images/search"
  )
  fact.image = data2[0].url
  return NextResponse.json({ fact })
}
