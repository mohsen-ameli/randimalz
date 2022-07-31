import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

const DogFax = () => {
  const [randomFact, setRandomFact] = useState([{}])

  const fetchStuff = async () => {
    let image = null
    let fact = null

    let res = await fetch("https://www.dogfactsapi.ducnguyen.dev/api/v1/facts/?number=1")
    if (res.status === 200) {
      let data = await res.json()
      fact = data.facts
    } else {
      console.log("error")
    }

    let res2 = await fetch("https://random.dog/woof.json")
    if (res2.status === 200) {
      let data = await res2.json()
      image = data.url
    } else {
      console.log("error")
    }

    setRandomFact(old => [...old, {fact: fact, image: image}])
  }

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      fetchStuff() 
    }
  }, [])

  return (
    <div className="dog-fax flex flex-col items-center">
      <div className="container flex flex-wrap justify-center">
        {randomFact.map((item, key) => (
          <Card content={item.fact} img={item.image} key={key} className="" />
        ))}
      </div>
      <Button text="Load More" click={fetchStuff} className="my-5" />
    </div>
  );
}
 
export default DogFax;