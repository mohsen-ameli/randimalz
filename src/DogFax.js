import { useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import RingLoader from "react-spinners/RingLoader";
import INTIAL_NUMBER_OF_ITEMS from "./itemsPerPage";

const DogFax = () => {
  const [randomFact, setRandomFact] = useState([{}])
  const [loading, setLoading] = useState(true)

  const fetchStuff = async (i) => {
    setLoading(true)
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
    i === INTIAL_NUMBER_OF_ITEMS && setLoading(false)
  }

  useEffect(() => {
    for (let i = 1; i <= INTIAL_NUMBER_OF_ITEMS; i++) {
      fetchStuff(i)
    }
  }, [])

  return (
    <>
    {loading && <div className="spinner"><RingLoader color="rgb(29, 78, 216)" size={150} /></div>}
    
    <div className="dog-fax flex flex-col items-center">
      <div className="container flex flex-wrap justify-center">
        {randomFact.map((item, key) => (
          <Card content={item.fact} img={item.image} key={key} className="" />
        ))}
      </div>
      <Button text="Load More" click={() => fetchStuff(INTIAL_NUMBER_OF_ITEMS)} className="my-5" />
    </div>
    </>
  );
}
 
export default DogFax;