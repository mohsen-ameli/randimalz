import { useEffect, useRef, useState } from "react"
import Button from "./components/Button"
import Card from './components/Card'

const CatFax = () => {
  const [randomFact, setRandomFact] = useState([{}])
  let ref = useRef()

  const fetchStuff = async () => {
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
  }

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      fetchStuff() 
    }
  }, [])
    
  return (
    <div className="cat-fax flex flex-col items-center">
      <div className="container px-4 flex flex-wrap justify-center">
        {randomFact.map((item, key) => (
          <Card content={item.fact} img={item.image} key={key} className="" />
        ))}
      </div>
      <Button text="Load More" click={fetchStuff} className="my-5" />
      <div ref={ref}></div>
    </div>
  );
}

export default CatFax;