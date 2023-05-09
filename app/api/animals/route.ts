import { NextResponse } from "next/server"
import path from "path"
import { promises as fs } from "fs"
import { Animal } from "@/types/Animal.type"
import fetchWikiSearch from "@/lib/animals/wikiSearch"
import fetchWikiImages from "@/lib/animals/wikiImages"
import fetchDescription from "@/lib/animals/fetchDescription"

export async function GET() {
  const jsonDirectory = path.join(process.cwd(), "data")
  const file = await fs.readFile(jsonDirectory + "/all-animals.json", "utf8")
  const animals: Animal[] = JSON.parse(file)

  const rand = Math.floor(Math.random() * animals.length)
  const randAnimal = animals[rand]

  try {
    const search = await fetchWikiSearch(randAnimal.Animal)
    const images = await fetchWikiImages(search)
    const description = await fetchDescription(randAnimal.Animal)

    randAnimal.images = images
    randAnimal.description = description

    return NextResponse.json({
      message: "Success",
      randAnimal,
      status: 200,
    })
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      error,
      status: 400,
    })
  }
}
