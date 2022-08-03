import { useEffect, useRef, useState } from "react"
import RingLoader from "react-spinners/RingLoader";

import Button from "./components/Button"
import Card from "./components/Card"
import INTIAL_NUMBER_OF_ITEMS from "./itemsPerPage";

const CatFax = () => {
  const [randomFact, setRandomFact] = useState([{}])
  const [loading, setLoading] = useState(true)
  let ref = useRef()

  const fetchStuff = async (i) => {
    setLoading(true)
    let fact = null
    let image = null

    let res = await fetch("https://meowfacts.herokuapp.com/")
    if (res.status === 200) {
      let data = await res.json()
      fact = data.data
    } else {
      console.log("error")
    }

    let res2 = await fetch("https://api.thecatapi.com/v1/images/search")
    if (res2.status === 200) {
      let data2 = await res2.json()
      image = data2[0].url
    }

    setRandomFact(old => [...old, {fact: fact, image: image}])
    ref.current.scrollIntoView()
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
    
    <div className="cat-fax flex flex-col items-center">
      <div className="container px-4 flex flex-wrap justify-center">
        {randomFact.map((item, key) => (
          <Card content={item.fact} img={item.image} key={key} className="" />
        ))}
      </div>
      <Button text="Load More" click={() => fetchStuff(INTIAL_NUMBER_OF_ITEMS)} className="my-5" />
      <div ref={ref}></div>
    </div>
    </>
  );
}

export default CatFax;