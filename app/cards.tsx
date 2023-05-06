// "use client"

// import { use, useState } from "react"
// import { INITIAL_CARDS_COUNT } from "@/data/data"
// import Card from "@/components/card"
// import { fetchAnimals } from "./api/animals/fetchAnimals"
// import { AnimalQuery } from "./Animal.type"
// import LoadMore from "@/components/loadMore"

// const Cards = () => {
//   const [animals, setAnimals] = useState<AnimalQuery[]>(
//     use<AnimalQuery[]>(fetchAnimals(INITIAL_CARDS_COUNT))
//   )

//   return (
//     <>
//       {animals.map((animal, i) => (
//         <Card key={i} randAnimal={animal.randAnimal} />
//       ))}

//       <LoadMore setAnimals={setAnimals} />
//     </>
//   )
// }

// export default Cards
