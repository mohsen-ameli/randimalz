import { Fact } from "@/types/Fact.type"
import axios from "axios"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

type Data1Type = {
  data: {
    data: [
      {
        id: string
        type: "fact"
        attributes: {
          body: string
        }
      }
    ]
  }
}

type Data2Type = {
  data: {
    fileSizeBytes: number
    url: string
  }
}

export default async function GetDogs(): Promise<Fact> {
  const facts = { fact: "", image: "" }

  // Fetching a random dog fact
  const { data: data1 }: Data1Type = await axios.get(
    "https://dogapi.dog/api/v2/facts?limit=1"
  )
  facts.fact = data1.data[0].attributes.body

  // Fetching a random dog image
  const { data: data2 }: Data2Type = await axios.get(
    "https://random.dog/woof.json"
  )
  facts.image = data2.url

  return facts
}
