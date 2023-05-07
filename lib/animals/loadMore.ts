"use server"

import { fetchAnimals } from "./fetchAnimals"

export default async function loadMore() {
  const animals = await fetchAnimals(1)
  console.log("hi from server")
  // return animals
}
