import { NextResponse } from "next/server"
import path from "path"
import { promises as fs } from "fs"
import fetchWikiSearch from "./wikiSearch"
import fetchWikiImages from "./wikiImages"
import { Animal } from "@/app/Animal.type"

export async function GET() {
  const jsonDirectory = path.join(process.cwd(), "data")
  const file = await fs.readFile(jsonDirectory + "/all-animals.json", "utf8")
  const animals: Animal[] = JSON.parse(file)

  const rand = Math.floor(Math.random() * animals.length)
  const randAnimal = animals[rand]

  try {
    const search = await fetchWikiSearch(randAnimal.Animal)
    const images = await fetchWikiImages(search)

    randAnimal.images = images

    return NextResponse.json({
      message: "Success",
      randAnimal,
    })
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      error,
    })
  }
}
