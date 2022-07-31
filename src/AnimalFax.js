import { useEffect, useState } from "react"
import Card from "./components/Card"
import Button from "./components/Button"

const AnimalFax = () => {
  const [randomFact, setRandomFact] = useState([{}])

  const fetchStuff = async () => {
    let data = null

    let res = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    if (res.status === 200) {
      data = await res.json()
      // console.log(data)
    } else {
      console.log("error")
    }

    setRandomFact(old => [...old, data])
  }

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      fetchStuff()
    }
  }, [])

  return (
    <div className="animal-fax">
      <div className="cat-fax flex flex-col items-center">
        <div className="container px-4 flex flex-wrap justify-center">
          {randomFact.map((item, key) => (
            <Card title={item.name} content={item.animal_type} img={item.image_link} key={key} />
          ))}
        </div>
        <Button text="Load More" click={fetchStuff} className="my-5" />
      </div>
    </div>
  );
}
 
export default AnimalFax;