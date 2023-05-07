export type Animal = {
  images?: string[]
  description: string
  Animal: string
  Young: string
  Female: string
  Male: string
  CollectiveNoun: string
  CollateralAdjective: string
  CulinaryNounForMeat: string
}

export type AnimalQuery = {
  message: "Success" | "Error"
  randAnimal: Animal
}
